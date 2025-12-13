# api/playback.py
from fastapi import APIRouter

playback_router = APIRouter()

@playback_router.post("/")
def play_channel(channel: str):
    # Here you'll update channel state in the future
    return {"message": f"Channel {channel} now playing"}