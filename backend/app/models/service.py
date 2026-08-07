from sqlalchemy import Column, Integer, String
from app.database import BaseWeb

class Service(BaseWeb):
    __tablename__ = "servicios"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    descripcion = Column(String, nullable=False)
    usuario_id = Column(Integer, nullable=False)  # FK manual
