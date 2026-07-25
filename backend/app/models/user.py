from sqlalchemy import Column, Integer, String, Boolean

from app.database import Base

class User(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    password_reset_required = Column(Boolean, default=True)  # ← NUEVO
    rol = Column(String, default="cliente")
