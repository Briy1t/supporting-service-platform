from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.user import User
from app.schemas.user_schema import UserLogin, UserCreate
from app.controllers.auth_controller import login_user, create_user
import bcrypt
import jwt
from datetime import datetime, timedelta
router = APIRouter(prefix="/auth", tags=["Auth"])
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("JWT_ALGORITHM")

def create_token(user):
    payload = {
        "sub": user.usuario,
        "id": user.id,
        "rol": user.rol,
        "exp": datetime.utcnow() + timedelta(hours=12)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
# -----------------------------
# LOGIN 
# -----------------------------
@router.post("/login")
def login(data: UserLogin, db: Session = Depends(get_db_web)):
    user = login_user(data, db)

    # Si requiere cambio de contraseña
    if user.password_reset_required:
        return {
            "status": "PASSWORD_RESET_REQUIRED",
            "message": "Debe cambiar la contraseña",
            "email": user.email
        }

    token = create_token(user)

    return {
        "status": "OK",
        "token": token,
        "id": user.id,
        "usuario": user.usuario,
        "rol": user.rol
    }

# -----------------------------
# REGISTRO NORMAL (usa tu controlador)
# -----------------------------
@router.post("/register")
def register(data: UserCreate, db: Session = Depends(get_db_web)):
    return create_user(data, db)


# -----------------------------
# CREAR USUARIO 
# Contraseña temporal + obligación de cambiarla
# -----------------------------
@router.post("/create-user")
def create_user_admin(usuario: str, nombre: str, email: str, password: str, rol: str = "cliente", db: Session = Depends(get_db_web)):
    existing = db.query(User).filter(User.usuario == usuario).first()
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode()

    user = User(
        usuario=usuario,
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
def change_password(usuario: str, old_password: str, new_password: str, db: Session = Depends(get_db_web)):
    user = db.query(User).filter(User.usuario == usuario).first()

    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if not bcrypt.checkpw(old_password.encode("utf-8"), user.password.encode("utf-8")):
        raise HTTPException(status_code=400, detail="Contraseña actual incorrecta")

    new_hashed = bcrypt.hashpw(new_password.encode("utf-8"), bcrypt.gensalt()).decode()

    user.password = new_hashed
    user.password_reset_required = False

    db.commit()
    db.refresh(user)

    return {"message": "Contraseña actualizada correctamente"}
