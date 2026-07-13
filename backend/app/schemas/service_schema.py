from pydantic import BaseModel

class ServiceBase(BaseModel):
    nombre: str
    descripcion: str

class ServiceCreate(ServiceBase):
    usuario_id: int

class ServiceResponse(ServiceBase):
    id: int
    usuario_id: int

    class Config:
        orm_mode = True
