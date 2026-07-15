from sqlalchemy.orm import Session
from app.models.ticket import Ticket
from app.schemas.ticket_schema import TicketCreate, TicketUpdate
from app.utils.security import raise_404

def create_ticket(data: TicketCreate, db: Session):
    ticket = Ticket(
        usuario_id=data.usuario_id,
        tipo=data.tipo,
        descripcion=data.descripcion
    )
    db.add(ticket)
    db.commit()
    db.refresh(ticket)
    return ticket

def update_ticket(ticket_id: int, data: TicketUpdate, db: Session):
    ticket = db.query(Ticket).filter(Ticket.id == ticket_id).first()

    if not ticket:
        raise_404("Ticket no encontrado")

    ticket.estado = data.estado
    ticket.tecnico_id = data.tecnico_id

    db.commit()
    db.refresh(ticket)
    return ticket

def get_ticket(ticket_id: int, db: Session):
    ticket = db.query(Ticket).filter(Ticket.id == ticket_id).first()

    if not ticket:
        raise_404("Ticket no encontrado")

    return ticket
