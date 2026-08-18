from slowapi import Limiter
from slowapi.util import get_remote_address
import bleach

limiter = Limiter(key_func=get_remote_address)

def sanitize(text: str) -> str:
    return bleach.clean(text)
