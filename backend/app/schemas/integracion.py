from pydantic import BaseModel, EmailStr
from datetime import datetime
from pydantic import ConfigDict
class IntegracionCreate(BaseModel):
    nombre: str
    empresa: str | None = None
    email: EmailStr
    mensaje: str
    tipo: str = "integracion_personalizada"

class IntegracionResponse(IntegracionCreate):
    id: int
    fecha: datetime

    model_config = ConfigDict(from_attributes=True)
