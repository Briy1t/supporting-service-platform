from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine_web, BaseWeb


from app.models.ticket import Ticket
from app.models.technician import Technician
from app.models.service import Service
from app.models.contact import Contactos



from app.routes import (
    auth_routes,
    ticket_routes,
    service_routes,
    technician_routes,
    contact_routes,
)


app = FastAPI(
    title="Supporting Backend",
    description="API del sistema Supporting — Usuarios, Tickets, Técnicos y Servicios",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


BaseWeb.metadata.create_all(bind=engine_web)

app.include_router(auth_routes.router)
app.include_router(ticket_routes.router)
app.include_router(service_routes.router)
app.include_router(technician_routes.router)
app.include_router(contact_routes.router)


@app.get("/")
def root():
    return {"status": "ok", "message": "API Supporting funcionando"}
