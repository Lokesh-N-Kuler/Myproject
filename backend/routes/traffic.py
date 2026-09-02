from fastapi import APIRouter

router = APIRouter(
    prefix="/api/traffic",
    tags=["Traffic"]
)


@router.get("/")
def get_traffic():
    return {
        "congestion": "Moderate",
        "average_speed": 32,
        "active_vehicles": 12450,
        "high_congestion_areas": [
            "Silk Board",
            "Bellandur",
            "Marathahalli"
        ],
        "chart_data": [
            {"time": "08:00", "vehicles": 420},
            {"time": "10:00", "vehicles": 650},
            {"time": "12:00", "vehicles": 520},
            {"time": "14:00", "vehicles": 780},
            {"time": "16:00", "vehicles": 920},
            {"time": "18:00", "vehicles": 1200},
            {"time": "20:00", "vehicles": 850}
        ]
    }