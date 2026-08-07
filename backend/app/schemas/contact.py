from pydantic import BaseModel, EmailStr
from datetime import datetime
from pydantic import ConfigDict

class ContactCreate(BaseModel):
    nombre: str
    email: EmailStr
    mensaje: str
    tipo: str = "general"  # general, acceso_empresas, demo_guiada, integracion_personalizada

class ContactResponse(ContactCreate):
    id: int
    fecha: datetime
    
    model_config = ConfigDict(from_attributes=True)
