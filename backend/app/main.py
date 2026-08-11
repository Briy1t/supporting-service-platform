from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine_web, BaseWeb


from app.models.ticket import Ticket
from app.models.technician import Technician
from app.models.service import Service
from app.models.contact import Contact
from app.models.acceso_empresas import AccesoEmpresas
from app.models.integracion import Integracion
from app.models.demo_guiada import DemoGuiada


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

# ---------------------------------------------------------
# 1) Crear la aplicación (solo UNA VEZ)
# ---------------------------------------------------------
app = FastAPI(
    title="Supporting Backend",
    description="API del sistema Supporting — Usuarios, Tickets, Técnicos y Servicios",
    version="1.0.0"
)

# ---------------------------------------------------------
# 2) CORS (antes de incluir routers)
# ---------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción pon tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------
# 3) Crear tablas
# ---------------------------------------------------------
BaseWeb.metadata.create_all(bind=engine_web)

# ---------------------------------------------------------
# 4) Incluir routers
# ---------------------------------------------------------
app.include_router(auth_routes.router)
app.include_router(ticket_routes.router)
app.include_router(service_routes.router)
app.include_router(technician_routes.router)
app.include_router(contact_routes.router)
app.include_router(acceso_empresas_routes.router)
app.include_router(integracion_routes.router)
app.include_router(demo_guiada_routes.router)

# ---------------------------------------------------------
# 5) Ruta raíz
# ---------------------------------------------------------
@app.get("/")
def root():
    return {"status": "ok", "message": "API Supporting funcionando"}
