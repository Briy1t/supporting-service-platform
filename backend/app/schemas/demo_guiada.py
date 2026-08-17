from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from pydantic import ConfigDict
class DemoGuiadaCreate(BaseModel):
    nombre: str = Field(min_length=3, max_length=50)
    email: EmailStr
    telefono: str | None = Field(default=None, pattern=r"^\+?\d{9,15}$")
    mensaje: str = Field(min_length=5, max_length=500)
    tipo: str = "demo_guiada"

    privacidad: bool = True
class DemoGuiadaResponse(DemoGuiadaCreate):
    id: int
    fecha: datetime

    model_config = ConfigDict(from_attributes=True)
