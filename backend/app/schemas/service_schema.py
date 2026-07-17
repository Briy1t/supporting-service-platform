from pydantic import BaseModel

class ServiceCreate(BaseModel):
    nombre: str
    descripcion: str
    usuario_id: int

class ServiceResponse(ServiceCreate):
    id: int

    class Config:
        from_attributes = True
