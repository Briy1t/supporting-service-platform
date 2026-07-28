from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user_schema import UserLogin, UserCreate
from app.utils.hashing import verify_password, hash_password
from app.utils.security import raise_401, raise_400


# ---------------------------------------------------------
# LOGIN
# ---------------------------------------------------------
def login_user(data: UserLogin, db: Session):
    user = db.query(User).filter(User.usuario == data.usuario).first()

    if not user:
        raise_401("Usuario no encontrado")

    if not verify_password(data.password, user.password):
        raise_401("Contraseña incorrecta")

    # Si la contraseña es temporal, avisamos al frontend
    if user.password_reset_required:
        return user  # ← DEVOLVER EL OBJETO, NO UN DICT

    return user  # ← SIEMPRE DEVOLVER EL OBJETO



# ---------------------------------------------------------
# CREAR USUARIO 
# ---------------------------------------------------------
def create_user(data: UserCreate, db: Session):
    if db.query(User).filter(User.email == data.email).first():
        raise_400("El email ya está registrado")

    new_user = User(
        usuario=data.usuario,
        nombre=data.nombre,
        email=data.email,
        password=hash_password(data.password),
        rol="cliente",
        password_reset_required=True
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

