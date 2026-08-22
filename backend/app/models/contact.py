from sqlalchemy import Column, Integer, String, DateTime, Boolean
from datetime import datetime
from app.database import BaseWeb

class Contactos(BaseWeb):
    __tablename__ = "contactos"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    email = Column(String, nullable=False)
    telefono = Column(String, nullable=False)
    mensaje = Column(String, nullable=False)
    tipo = Column(String, default="general")
 
    privacidad = Column(Boolean, nullable=False)
    fecha_aceptacion = Column(DateTime, default=datetime.utcnow)
    ip_usuario = Column(String, nullable=True)
       
    fecha = Column(DateTime, default=datetime.utcnow)
