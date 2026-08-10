from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.service import Service
from app.schemas.service_schema import ServiceCreate, ServiceResponse
from app.models.technician import Technician
from app.models.ticket import Ticket

router = APIRouter(
    prefix="/services",
    tags=["Servicios"]
)


@router.get("/panel-info")
def panel_info(db: Session = Depends(get_db_web)):
    return {
        "tecnicos": db.query(Technician).count(),
        "tickets": db.query(Ticket).count(),
        "servicios": db.query(Service).count()
    }

@router.get("/", response_model=list[ServiceResponse])
def list_services(db: Session = Depends(get_db_web)):
    return db.query(Service).all()


@router.post("/", response_model=ServiceResponse)
def create_service(service: ServiceCreate, db: Session = Depends(get_db_web)):
    new_service = Service(
        nombre=service.nombre,
        descripcion=service.descripcion,
        usuario_id=service.usuario_id
    )
    db.add(new_service)
    db.commit()
    db.refresh(new_service)
    return new_service


@router.get("/{service_id}", response_model=ServiceResponse)
def get_service(service_id: int, db: Session = Depends(get_db_web)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Servicio no encontrado")
    return service


@router.put("/{service_id}", response_model=ServiceResponse)
def update_service(service_id: int, service: ServiceCreate, db: Session = Depends(get_db_web)):
    db_service = db.query(Service).filter(Service.id == service_id).first()
    if not db_service:
        raise HTTPException(status_code=404, detail="Servicio no encontrado")

    db_service.nombre = service.nombre
    db_service.descripcion = service.descripcion
    db_service.usuario_id = service.usuario_id

    db.commit()
    db.refresh(db_service)
    return db_service
