from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.contact import Contact
from app.schemas.contact import ContactCreate, ContactResponse

router = APIRouter(prefix="/contacto", tags=["Contacto"])

@router.post("/", response_model=ContactResponse)
def crear_contacto(data: ContactCreate, db: Session = Depends(get_db)):
    contacto = Contact(
        nombre=data.nombre,
        email=data.email,
        mensaje=data.mensaje,
        tipo=data.tipo
    )
    db.add(contacto)
    db.commit()
    db.refresh(contacto)
    return contacto
