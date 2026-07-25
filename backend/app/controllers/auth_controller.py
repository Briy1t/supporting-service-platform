from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user_schema import UserLogin, UserCreate
from app.utils.hashing import verify_password, hash_password
from app.utils.security import raise_401, raise_400


# ---------------------------------------------------------
# LOGIN
# ---------------------------------------------------------
def login_user(data: UserLogin, db: Session):
    user = db.query(User).filter(User.email == data.email).first()

    if not user:
        raise_401("Usuario no encontrado")

    if not verify_password(data.password, user.password):
        raise_401("Contraseña incorrecta")

    # Si la contraseña es temporal, avisamos al frontend
    if user.password_reset_required:
        return {
            "status": "PASSWORD_RESET_REQUIRED",
            "message": "Debe cambiar la contraseña",
            "email": user.email
        }

    # Login normal
    return {
        "status": "OK",
        "id": user.id,
        "nombre": user.nombre,
        "rol": user.rol
    }


# ---------------------------------------------------------
# CREAR USUARIO 
# ---------------------------------------------------------
def create_user(data: UserCreate, db: Session):
    if db.query(User).filter(User.email == data.email).first():
        raise_400("El email ya está registrado")

    new_user = User(
        nombre=data.nombre,
        email=data.email,
        password=hash_password(data.password),
        rol="cliente",
        password_reset_required=True  # ← porque tú le das una clave temporal
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "id": new_user.id,
        "nombre": new_user.nombre,
        "email": new_user.email,
        "rol": new_user.rol,
        "password_reset_required": new_user.password_reset_required
    }
