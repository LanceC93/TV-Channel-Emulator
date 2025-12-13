from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.guide import guide_router
#from api.playback import playback_router

app = FastAPI(title="TV Emulator Scheduler")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

#mount routers
app.include_router(guide_router, prefix="/api/guide")
#app.include_router(playback_router, prefix="/api/playback")

# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to the TV Emulator Scheduler API"}