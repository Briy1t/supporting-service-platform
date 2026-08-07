from sqlalchemy import Column, Integer, String
from app.database import BaseWeb

class Technician(BaseWeb):
    __tablename__ = "tecnicos"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    especialidad = Column(String, nullable=False)
    disponibilidad = Column(String, default="disponible")  # disponible / ocupado
