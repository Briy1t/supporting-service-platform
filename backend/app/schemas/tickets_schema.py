from pydantic import BaseModel
from datetime import datetime

class TicketBase(BaseModel):
    tipo: str
    descripcion: str

class TicketCreate(TicketBase):
    usuario_id: int

class TicketUpdate(BaseModel):
    estado: str
    tecnico_id: int | None = None

class TicketResponse(TicketBase):
    id: int
    usuario_id: int
    tecnico_id: int | None
    estado: str
    creado_en: datetime

    class Config:
        orm_mode = True
