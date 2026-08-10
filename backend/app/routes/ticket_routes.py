from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db_web
from app.models.ticket import Ticket
from app.schemas.ticket_schema import TicketCreate, TicketUpdate
from app.controllers.ticket_controller import create_ticket, update_ticket, get_ticket

router = APIRouter(prefix="/tickets", tags=["Tickets"])

@router.post("/")
def crear_ticket(data: TicketCreate, db: Session = Depends(get_db_web)):
    return create_ticket(data, db)

@router.get("/{ticket_id}")
def obtener_ticket(ticket_id: int, db: Session = Depends(get_db_web)):
    return get_ticket(ticket_id, db)

@router.put("/{ticket_id}")
def actualizar_ticket(ticket_id: int, data: TicketUpdate, db: Session = Depends(get_db_web)):
    return update_ticket(ticket_id, data, db)

@router.get("/")
def get_tickets(db: Session = Depends(get_db_web)):
    return db.query(Ticket).all()

