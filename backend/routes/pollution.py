from fastapi import APIRouter

router = APIRouter(
    prefix="/api/pollution",
    tags=["Pollution"]
)


@router.get("/")
def get_pollution():
    return {
        "aqi": 68,
        "status": "Moderate",
        "pm25": 32.4,
        "pm10": 58.7,
        "co": 0.8,
        "no2": 24,
        "chart_data": [
            {"time": "08:00", "aqi": 52},
            {"time": "10:00", "aqi": 58},
            {"time": "12:00", "aqi": 65},
            {"time": "14:00", "aqi": 72},
            {"time": "16:00", "aqi": 68},
            {"time": "18:00", "aqi": 75},
            {"time": "20:00", "aqi": 68}
        ],
        "high_pollution_areas": [
            "Whitefield",
            "Peenya",
            "Silk Board"
        ]
    }