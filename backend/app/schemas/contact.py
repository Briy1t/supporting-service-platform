from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from pydantic import ConfigDict

class ContactCreate(BaseModel):
    nombre: str = Field(min_length=3, max_length=50)
    email: EmailStr
    telefono: str = Field(pattern=r"^\+?\d{9,15}$")
    mensaje: str = Field(min_length=5, max_length=500)
    tipo: str = "general"

    privacidad: bool = True
class ContactResponse(ContactCreate):
    id: int
    fecha: datetime
    
    model_config = ConfigDict(from_attributes=True)
