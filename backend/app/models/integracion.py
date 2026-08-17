from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.database import BaseWeb

class Integracion(BaseWeb):
    __tablename__ = "integracion_personalizada"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    empresa = Column(String, nullable=True)
    email = Column(String, nullable=False)
    telefono = Column(String, nullable=True)
    mensaje = Column(String, nullable=False)
    tipo = Column(String, default="integracion_personalizada")
    
    privacidad = Column(Boolean, nullable=False)
    fecha_aceptacion = Column(DateTime, default=datetime.utcnow)
    ip_usuario = Column(String, nullable=True)
    
    fecha = Column(DateTime, default=datetime.utcnow)
