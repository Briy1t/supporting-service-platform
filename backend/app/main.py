from fastapi import FastAPI
from app.routes import auth_routes, ticket_routes, service_routes, technician_routes

app = FastAPI(
    title="Supporting Backend",
    description="API del sistema Supporting — Usuarios, Tickets, Técnicos y Servicios",
    version="1.0.0"
)

# Registrar rutas
app.include_router(auth_routes.router)
app.include_router(ticket_routes.router)
app.include_router(service_routes.router)
app.include_router(technician_routes.router)

@app.get("/")
def root():
    return {"status": "ok", "message": "API Supporting funcionando"}
