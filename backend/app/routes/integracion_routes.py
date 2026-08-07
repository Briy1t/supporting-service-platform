from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.integracion import Integracion
from app.schemas.integracion import IntegracionCreate, IntegracionResponse

router = APIRouter(prefix="/integracion", tags=["Integración Personalizada"])

@router.post("/", response_model=IntegracionResponse)
def crear_integracion(data: IntegracionCreate, db: Session = Depends(get_db_web)):
    solicitud = Integracion(
        nombre=data.nombre,
        empresa=data.empresa,
        email=data.email,
        mensaje=data.mensaje,
        tipo=data.tipo
    )
    db.add(solicitud)
    db.commit()
    db.refresh(solicitud)
    return solicitud
