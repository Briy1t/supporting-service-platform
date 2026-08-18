from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.integracion import Integracion
from app.schemas.integracion import IntegracionCreate, IntegracionResponse
from app.security import limiter, sanitize
from slowapi import Limiter
from slowapi.util import get_remote_address

router = APIRouter(prefix="/integracion", tags=["Integración Personalizada"])

@router.post("/", response_model=IntegracionResponse)
@limiter.limit("5/minute")          
def crear_integracion(request: Request, data: IntegracionCreate, db: Session = Depends(get_db_web)):
    solicitud = Integracion(
        nombre=data.nombre,
        empresa=data.empresa,
        email=data.email,
        mensaje=sanitize(data.mensaje),
        tipo=data.tipo,
        privacidad=data.privacidad,
        ip_usuario=request.client.host
    )
    db.add(solicitud)
    db.commit()
    db.refresh(solicitud)
    print(f"[PRIVACIDAD] Integración aceptada desde IP {request.client.host}")
    
    return solicitud
