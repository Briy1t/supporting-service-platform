from sqlalchemy.orm import Session
from app.models.service import Service
from app.schemas.service_schema import ServiceCreate
from app.utils.security import raise_404

def get_servicios_usuario(usuario_id: int, db: Session):
    return db.query(Service).filter(Service.usuario_id == usuario_id).all()

def create_servicio(data: ServiceCreate, db: Session):
    servicio = Service(
        nombre=data.nombre,
        descripcion=data.descripcion,
        usuario_id=data.usuario_id
    )
    db.add(servicio)
    db.commit()
    db.refresh(servicio)
    return servicio
