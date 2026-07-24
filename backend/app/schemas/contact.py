from pydantic import BaseModel, EmailStr
from datetime import datetime

class ContactCreate(BaseModel):
    nombre: str
    email: EmailStr
    mensaje: str
    tipo: str = "general"  # general, acceso_empresas, demo_guiada, integracion_personalizada

class ContactResponse(ContactCreate):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
