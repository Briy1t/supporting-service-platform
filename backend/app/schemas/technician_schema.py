from pydantic import BaseModel
from pydantic import ConfigDict
class TechnicianBase(BaseModel):
    nombre: str
    especialidad: str

class TechnicianCreate(TechnicianBase):
    pass

class TechnicianResponse(TechnicianBase):
    id: int
    disponibilidad: str

    model_config = ConfigDict(from_attributes=True)
