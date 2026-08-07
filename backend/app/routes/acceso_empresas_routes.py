from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.acceso_empresas import AccesoEmpresas
from app.schemas.acceso_empresas import AccesoEmpresasCreate, AccesoEmpresasResponse

router = APIRouter(prefix="/acceso_empresas", tags=["Acceso Empresas"])

@router.post("/", response_model=AccesoEmpresasResponse)
def crear_acceso_empresas(data: AccesoEmpresasCreate, db: Session = Depends(get_db_web)):
    solicitud = AccesoEmpresas(
        nombre=data.nombre,
        email=data.email,
        telefono=data.telefono,
        mensaje=data.mensaje,
        tipo=data.tipo
    )
    db.add(solicitud)
    db.commit()
    db.refresh(solicitud)
    return solicitud

