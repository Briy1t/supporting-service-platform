from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user_schema import UserLogin, UserCreate
from app.utils.hashing import verify_password, hash_password
from app.utils.security import raise_401, raise_400

def login_user(data: UserLogin, db: Session):
    user = db.query(User).filter(User.email == data.email).first()

    if not user:
        raise_401("Usuario no encontrado")

    if not verify_password(data.password, user.password):
        raise_401("Contraseña incorrecta")

    return {"id": user.id, "nombre": user.nombre, "rol": user.rol}

def create_user(data: UserCreate, db: Session):
    if db.query(User).filter(User.email == data.email).first():
        raise_400("El email ya está registrado")

    new_user = User(
        nombre=data.nombre,
        email=data.email,
        password=hash_password(data.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user
