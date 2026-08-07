from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime
from pydantic import ConfigDict
class AccesoEmpresasCreate(BaseModel):
    nombre: str
    email: EmailStr
    telefono: str | None = None
    mensaje: str
    tipo: str = "acceso_empresas"

class AccesoEmpresasResponse(AccesoEmpresasCreate):
    id: int
    fecha: datetime

    model_config = ConfigDict(from_attributes=True)
