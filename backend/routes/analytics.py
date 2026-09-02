from fastapi import APIRouter

router = APIRouter(
    prefix="/api/analytics",
    tags=["Analytics"]
)


@router.get("/")
def get_analytics():
    return {
        "city_score": 82,
        "traffic_efficiency": 74,
        "air_quality_score": 68,
        "safety_score": 88,

        "monthly_data": [
            {"month": "Jan", "traffic": 65, "aqi": 72, "safety": 80},
            {"month": "Feb", "traffic": 70, "aqi": 68, "safety": 82},
            {"month": "Mar", "traffic": 68, "aqi": 75, "safety": 78},
            {"month": "Apr", "traffic": 75, "aqi": 70, "safety": 85},
            {"month": "May", "traffic": 72, "aqi": 66, "safety": 88},
            {"month": "Jun", "traffic": 78, "aqi": 64, "safety": 90}
        ],

        "insights": [
            "Traffic congestion improved by 8% this month.",
            "Air quality is stable compared to last month.",
            "Emergency response time improved by 12%.",
            "Overall city performance is improving."
        ]
    }