from pydantic import BaseModel, EmailStr
from datetime import datetime
from pydantic import ConfigDict
class DemoGuiadaCreate(BaseModel):
    nombre: str
    empresa: str | None = None
    email: EmailStr
    mensaje: str
    tipo: str = "demo_guiada"

class DemoGuiadaResponse(DemoGuiadaCreate):
    id: int
    fecha: datetime

    model_config = ConfigDict(from_attributes=True)
