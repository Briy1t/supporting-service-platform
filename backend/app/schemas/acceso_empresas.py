from pydantic import BaseModel, EmailStr
from datetime import datetime

class AccesoEmpresasCreate(BaseModel):
    
    nombre: str
    email: EmailStr
    telefono: str | None = None
    mensaje: str
    tipo: str = "acceso_empresas"

class AccesoEmpresasResponse(AccesoEmpresasCreate):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
