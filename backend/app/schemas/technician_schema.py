from pydantic import BaseModel

class TechnicianBase(BaseModel):
    nombre: str
    especialidad: str

class TechnicianCreate(TechnicianBase):
    pass

class TechnicianResponse(TechnicianBase):
    id: int
    disponibilidad: str

    class Config:
        orm_mode = True
