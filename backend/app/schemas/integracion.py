from pydantic import BaseModel, EmailStr
from datetime import datetime

class IntegracionCreate(BaseModel):
    nombre: str
    empresa: str
    email: EmailStr
    mensaje: str
    tipo: str = "integracion_personalizada"

class IntegracionResponse(IntegracionCreate):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
