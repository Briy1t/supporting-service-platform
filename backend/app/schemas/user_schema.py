from pydantic import BaseModel, EmailStr

# -----------------------------
# 1) BASE DEL USUARIO
# -----------------------------
class UserBase(BaseModel):
    usuario: str
    nombre: str
    email: EmailStr


# -----------------------------
# 2) CREACIÓN DE USUARIO (REGISTRO)
# -----------------------------
class UserCreate(UserBase):
    password: str
    rol: str = "cliente"   # por defecto


# -----------------------------
# 3) LOGIN DE USUARIO
# -----------------------------
class UserLogin(BaseModel):
    usuario: str
    password: str


# -----------------------------
# 4) RESPUESTA DEL LOGIN
# -----------------------------
class UserResponse(BaseModel):
    id: int
    usuario: str
    rol: str
    token: str

    class Config:
        orm_mode = True
