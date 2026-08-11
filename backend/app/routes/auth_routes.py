from fastapi import APIRouter, HTTPException
import requests
from app.schemas.user_schema import UserLogin
import os
from dotenv import load_dotenv

router = APIRouter(prefix="/auth", tags=["Auth"])

load_dotenv()

PLATFORM_URL = os.getenv("PLATFORM_URL")

@router.post("/login")
def login(data: UserLogin):
    # Enviar credenciales a la plataforma
    response = requests.post(
        f"{PLATFORM_URL}/auth/login",
        json=data.dict()
    )

    if response.status_code != 200:
        raise HTTPException(
            status_code=response.status_code,
            detail=response.json().get("detail")
        )
    return response.json()