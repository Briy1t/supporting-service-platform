from fastapi import FastAPI
from app.database import engine, Base

from app.models.user import User
from app.models.ticket import Ticket
from app.models.technician import Technician
from app.models.service import Service
from app.models.contact import Contact
from app.models.acceso_empresas import AccesoEmpresas
from app.models.integracion import Integracion
from app.models.demo_guiada import DemoGuiada

Base.metadata.create_all(bind=engine)

from app.routes import (
    auth_routes,
    ticket_routes,
    service_routes,
    technician_routes,
    contact_routes,
    acceso_empresas_routes,
    integracion_routes,
    demo_guiada_routes
)

app = FastAPI(
    title="Supporting Backend",
    description="API del sistema Supporting — Usuarios, Tickets, Técnicos y Servicios",
    version="1.0.0"
)

app.include_router(auth_routes.router)
app.include_router(ticket_routes.router)
app.include_router(service_routes.router)
app.include_router(technician_routes.router)
app.include_router(contact_routes.router)
app.include_router(acceso_empresas_routes.router)
app.include_router(integracion_routes.router)
app.include_router(demo_guiada_routes.router)

@app.get("/")
def root():
    return {"status": "ok", "message": "API Supporting funcionando"}
