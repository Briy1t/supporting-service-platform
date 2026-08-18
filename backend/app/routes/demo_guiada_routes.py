from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.demo_guiada import DemoGuiada
from app.schemas.demo_guiada import DemoGuiadaCreate, DemoGuiadaResponse
from app.security import limiter, sanitize
from slowapi import Limiter
from slowapi.util import get_remote_address

router = APIRouter(prefix="/demo_guiada", tags=["Demo Guiada"])

@router.post("/", response_model=DemoGuiadaResponse)
@limiter.limit("5/minute")  
def crear_demo_guiada(request: Request, data: DemoGuiadaCreate, db: Session = Depends(get_db_web)):
    solicitud = DemoGuiada(
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
    
    print(f"[PRIVACIDAD] Demo Guiada aceptada desde IP {request.client.host}")
        
    return solicitud
