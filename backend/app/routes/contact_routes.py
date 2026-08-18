from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.contact import Contact
from app.schemas.contact import ContactCreate, ContactResponse
from app.security import limiter, sanitize
from slowapi import Limiter
from slowapi.util import get_remote_address

router = APIRouter(prefix="/contacto", tags=["Contacto"])

@router.post("/", response_model=ContactResponse)
@limiter.limit("5/minute")
def crear_contacto(request: Request, data: ContactCreate, db: Session = Depends(get_db_web)):
    contacto = Contact(
        nombre=data.nombre,
        email=data.email,
        mensaje=sanitize(data.mensaje),
        tipo=data.tipo,
        privacidad=data.privacidad,
        ip_usuario=request.client.host
        
    )
    db.add(contacto)
    db.commit()
    db.refresh(contacto)
    
    print(f"[PRIVACIDAD] Contacto aceptado desde IP {request.client.host}")
    
    return contacto
