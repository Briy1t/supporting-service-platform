from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.user_schema import UserLogin, UserCreate
from app.controllers.auth_controller import login_user, create_user

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
def login(data: UserLogin, db: Session = Depends(get_db)):
    return login_user(data, db)

@router.post("/register")
def register(data: UserCreate, db: Session = Depends(get_db)):
    return create_user(data, db)
