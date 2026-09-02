from fastapi import APIRouter

router = APIRouter(
    prefix="/api/flood",
    tags=["Flood"]
)


@router.get("/")
def get_flood_data():
    return {
        "risk_level": "Low",
        "risk_score": 28,
        "affected_areas": 3,
        "water_level": 42,
        "rainfall": 12.5,

        "risk_areas": [
            {
                "name": "Koramangala",
                "risk": "Moderate"
            },
            {
                "name": "HSR Layout",
                "risk": "Low"
            },
            {
                "name": "Bellandur",
                "risk": "High"
            }
        ],

        "chart_data": [
            {"time": "08:00", "water_level": 25},
            {"time": "10:00", "water_level": 32},
            {"time": "12:00", "water_level": 45},
            {"time": "14:00", "water_level": 58},
            {"time": "16:00", "water_level": 48},
            {"time": "18:00", "water_level": 42}
        ]
    }