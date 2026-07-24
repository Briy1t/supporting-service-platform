from pydantic import BaseModel, EmailStr
from datetime import datetime

class DemoGuiadaCreate(BaseModel):
    nombre: str
    empresa: str | None = None
    email: EmailStr
    mensaje: str
    tipo: str = "demo_guiada"

class DemoGuiadaResponse(DemoGuiadaCreate):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
