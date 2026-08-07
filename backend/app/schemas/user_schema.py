from pydantic import BaseModel, EmailStr
from pydantic import ConfigDict
class UserBase(BaseModel):
    usuario: str
    nombre: str
    email: EmailStr



class UserCreate(UserBase):
    password: str
    rol: str = "cliente"   # por defecto


class UserLogin(BaseModel):
    usuario: str
    password: str



class UserResponse(BaseModel):
    id: int
    usuario: str
    rol: str
    token: str

    model_config = ConfigDict(from_attributes=True)
