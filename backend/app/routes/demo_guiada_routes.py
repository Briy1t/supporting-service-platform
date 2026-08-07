from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.demo_guiada import DemoGuiada
from app.schemas.demo_guiada import DemoGuiadaCreate, DemoGuiadaResponse

router = APIRouter(prefix="/demo_guiada", tags=["Demo Guiada"])

@router.post("/", response_model=DemoGuiadaResponse)
def crear_demo_guiada(data: DemoGuiadaCreate, db: Session = Depends(get_db_web)):
    solicitud = DemoGuiada(
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
