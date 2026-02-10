# backend/app/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import func
from .database import SessionLocal, engine, Base
from .models import FeeCollection

# Create tables on startup
Base.metadata.create_all(bind=engine)

app = FastAPI()

# --- THE FIX IS HERE ---
# Allow ALL origins to bypass the CORS error
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# -----------------------

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Families Not Fees API is active"}

@app.get("/api/summary")
def get_summary(db: Session = Depends(get_db)):
    # Calculate total collected across all states and years
    total_collected = db.query(func.sum(FeeCollection.amount)).scalar()
    
    # Calculate the latest year available
    latest_year = db.query(func.max(FeeCollection.year)).scalar()
    
    # Handle case where DB is empty (returns None)
    if total_collected is None:
        total_collected = 0
        latest_year = "N/A"

    return {
        "total_collected": total_collected,
        "latest_year": latest_year,
        "message": "Data derived from Foster Care Collections Data Analysis"
    }

@app.get("/api/state/{state_name}")
def get_state_data(state_name: str, db: Session = Depends(get_db)):
    data = db.query(FeeCollection).filter(FeeCollection.state == state_name.upper()).all()
    return data