from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.controllers.service_controller import get_servicios_usuario

router = APIRouter(prefix="/servicios", tags=["Servicios"])

@router.get("/{usuario_id}")
def servicios_usuario(usuario_id: int, db: Session = Depends(get_db)):
    return get_servicios_usuario(usuario_id, db)
