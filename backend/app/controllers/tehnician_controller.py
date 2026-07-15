from sqlalchemy.orm import Session
from app.models.technician import Technician
from app.schemas.technician_schema import TechnicianCreate
from app.utils.security import raise_404

def get_tecnicos(db: Session):
    return db.query(Technician).all()

def create_tecnico(data: TechnicianCreate, db: Session):
    tecnico = Technician(
        nombre=data.nombre,
        especialidad=data.especialidad
    )
    db.add(tecnico)
    db.commit()
    db.refresh(tecnico)
    return tecnico
