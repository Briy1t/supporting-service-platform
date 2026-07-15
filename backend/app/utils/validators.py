def validate_email(email: str):
    if "@" not in email:
        return False
    return True
