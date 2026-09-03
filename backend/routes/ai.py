from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter(
    prefix="/api/ai",
    tags=["AI Assistant"]
)


class AIRequest(BaseModel):
    message: str


@router.post("/")
def chat_with_ai(request: AIRequest):

    user_message = request.message.lower()

    if "traffic" in user_message:
        response = (
            "Traffic conditions are currently moderate. "
            "Heavy congestion has been detected near Silk Board and Bellandur."
        )

    elif "flood" in user_message:
        response = (
            "Current flood risk is low, but some areas are being monitored "
            "due to rainfall and water-level changes."
        )

    elif "pollution" in user_message or "aqi" in user_message:
        response = (
            "The current air quality is moderate. "
            "Pollution levels are being monitored in high-traffic areas."
        )

    elif "emergency" in user_message:
        response = (
            "There are active emergency incidents being monitored by the system."
        )

    else:
        response = (
            "I am City Pilot AI. You can ask me about traffic, pollution, "
            "flood risks, emergencies, and city analytics."
        )

    return {
        "response": response
    }