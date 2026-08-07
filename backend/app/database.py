from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os

load_dotenv()

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

engine_web = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)
SessionLocalWeb = sessionmaker(autocommit=False, autoflush=False, bind=engine_web)

BaseWeb = declarative_base()

def get_db_web():
    db = SessionLocalWeb()
    try:
        yield db
    finally:
        db.close()



