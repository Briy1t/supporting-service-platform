from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.user import User
from app.schemas.user_schema import UserLogin, UserCreate
from app.controllers.auth_controller import login_user, create_user
import bcrypt
import jwt
from datetime import datetime, timedelta
router = APIRouter(prefix="/auth", tags=["Auth"])

SECRET_KEY = "supporting_secret_key"
ALGORITHM = "HS256"

def create_token(user):
    payload = {
        "sub": user.email,
        "id": user.id,
        "rol": user.rol,
        "exp": datetime.utcnow() + timedelta(hours=12)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
# -----------------------------
# LOGIN (usa tu controlador)
# -----------------------------
@router.post("/login")
def login(data: UserLogin, db: Session = Depends(get_db)):
    user_data = login_user(data, db)

    # Si requiere cambio de contraseña, no generamos token
    if user_data["status"] == "PASSWORD_RESET_REQUIRED":
        return user_data

    # Crear token
    token = create_token(user_data)

    return {
        "status": "OK",
        "token": token,
        "id": user_data["id"],
        "nombre": user_data["nombre"],
        "rol": user_data["rol"]
    }

# -----------------------------
# REGISTRO NORMAL (usa tu controlador)
# -----------------------------
@router.post("/register")
def register(data: UserCreate, db: Session = Depends(get_db)):
    return create_user(data, db)


# -----------------------------
# CREAR USUARIO (solo para ti)
# Contraseña temporal + obligación de cambiarla
# -----------------------------
@router.post("/create-user")
def create_user_admin(nombre: str, email: str, password: str, rol: str = "cliente", db: Session = Depends(get_db)):
    # ¿Existe ya?
    existing = db.query(User).filter(User.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    # Hash de la contraseña temporal
    hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode()

    # Crear usuario con obligación de cambiar contraseña
    user = User(
        nombre=nombre,
        email=email,
        password=hashed,
        rol=rol,
        password_reset_required=True
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "Usuario creado correctamente", "id": user.id}


# -----------------------------
# CAMBIO DE CONTRASEÑA
# Para cuando el usuario entra por primera vez
# -----------------------------
@router.post("/change-password")
def change_password(email: str, old_password: str, new_password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()

    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    # Validar contraseña actual
    if not bcrypt.checkpw(old_password.encode("utf-8"), user.password.encode("utf-8")):
        raise HTTPException(status_code=400, detail="Contraseña actual incorrecta")

    # Generar nuevo hash
    new_hashed = bcrypt.hashpw(new_password.encode("utf-8"), bcrypt.gensalt()).decode()

    user.password = new_hashed
    user.password_reset_required = False

    db.commit()
    db.refresh(user)

    return {"message": "Contraseña actualizada correctamente"}
