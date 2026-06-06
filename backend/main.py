from fastapi import FastAPI

app = FastAPI(title="StoreTrack API")

@app.get("/")
def home():
    return {"message": "StoreTrack API Running"}