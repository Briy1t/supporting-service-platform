from fastapi import HTTPException, status

def raise_404(message="No encontrado"):
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=message)

def raise_400(message="Solicitud inválida"):
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=message)

def raise_401(message="No autorizado"):
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=message)
