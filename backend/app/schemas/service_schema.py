from pydantic import BaseModel
from pydantic import ConfigDict
class ServiceCreate(BaseModel):
    nombre: str
    descripcion: str
    usuario_id: int

class ServiceResponse(ServiceCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
