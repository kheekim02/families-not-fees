# backend/seed_data.py
import pandas as pd
from app.database import SessionLocal, engine, Base
from app.models import FeeCollection

# 1. Create the database tables
Base.metadata.create_all(bind=engine)

# 2. Read and Clean Data
# Using the filename provided: 'Foster Care Collections Data Analysis - Foster Care Collections Data Analysis.csv'
# Ensure you rename it to 'data.csv' or update the line below
df = pd.read_csv("data.csv")

# Remove the 'TOTALS' row and any empty rows
df = df[df["State"] != "TOTALS"].dropna(subset=["State"])

# Melt the dataframe (convert columns 2016-2024 into rows)
# We exclude 'State' and 'Unnamed: 10' (if it exists) from the value vars
value_vars = [col for col in df.columns if col not in ['State', 'Unnamed: 10']]
df_melted = df.melt(id_vars=["State"], value_vars=value_vars, var_name="Year", value_name="Amount")

# Convert Year to integer
df_melted["Year"] = df_melted["Year"].astype(int)

# 3. Insert into Database
db = SessionLocal()

# Clear existing data to avoid duplicates
db.query(FeeCollection).delete()
db.commit()

print("Seeding database...")
for _, row in df_melted.iterrows():
    record = FeeCollection(
        state=row["State"],
        year=row["Year"],
        amount=row["Amount"]
    )
    db.add(record)

db.commit()
db.close()
print("Database seeded successfully!")