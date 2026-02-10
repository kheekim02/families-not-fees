# backend/app/models.py
from sqlalchemy import Column, Integer, String
from .database import Base

class FeeCollection(Base):
    __tablename__ = "fee_collections"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String, index=True)
    year = Column(Integer, index=True)
    amount = Column(Integer)