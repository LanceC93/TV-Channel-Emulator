from fastapi import APIRouter
from channels.channel import Channel

guide_router = APIRouter()


channels = [
    Channel(1, "Toon Town", 101, "24/7 cartoons with late night anime and adult animation.", scheduler=None)
]

@guide_router.get("/")
def get_guide(window: int = 180):
    #fake for now
    projected = []
    for channel in channels:
        projected.append({
            "id": channel.id,
            "name": channel.name,
            "number": channel.number,
            "projection": [
                {"start": "21:00", "end": "21:30", "title": "King of the Hill", "block": "adult_swim"}
            ]
        })
    return {"channels": projected}