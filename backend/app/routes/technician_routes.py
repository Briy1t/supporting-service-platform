from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.controllers.technician_controller import get_tecnicos

router = APIRouter(prefix="/tecnicos", tags=["Tecnicos"])

@router.get("/")
def listar_tecnicos(db: Session = Depends(get_db)):
    return get_tecnicos(db)

@router.get("/tecnicos")
def get_tecnicos(db: Session = Depends(get_db)):
    return db.query(Technician).all()

