from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.acceso_empresas import AccesoEmpresas
from app.schemas.acceso_empresas import AccesoEmpresasCreate, AccesoEmpresasResponse
from app.security import limiter, sanitize
from slowapi import Limiter
from slowapi.util import get_remote_address

router = APIRouter(prefix="/acceso_empresas", tags=["Acceso Empresas"])

limiter = Limiter(key_func=get_remote_address)

@router.post("/", response_model=AccesoEmpresasResponse)
@limiter.limit("5/minute")   
def crear_acceso_empresas(
    request: Request,
    data: AccesoEmpresasCreate,
    db: Session = Depends(get_db_web)
):
    solicitud = AccesoEmpresas(
        nombre=data.nombre,
        email=data.email,
        telefono=data.telefono,
        mensaje=sanitize(data.mensaje),
        tipo=data.tipo,
        privacidad=data.privacidad,          
        ip_usuario=request.client.host       
    )

    db.add(solicitud)
    db.commit()
    db.refresh(solicitud)

    print(f"[PRIVACIDAD] Acceso Empresas aceptado desde IP {request.client.host}")
    
    return solicitud 
