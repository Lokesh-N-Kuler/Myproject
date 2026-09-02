from fastapi import APIRouter

router = APIRouter(
    prefix="/api/emergency",
    tags=["Emergency"]
)


@router.get("/")
def get_emergencies():
    return {
        "total_active": 12,
        "critical": 3,
        "resolved_today": 28,

        "incidents": [
            {
                "id": 1,
                "type": "Road Accident",
                "location": "Silk Board Junction",
                "severity": "Critical",
                "status": "Active"
            },
            {
                "id": 2,
                "type": "Water Logging",
                "location": "Bellandur",
                "severity": "High",
                "status": "Active"
            },
            {
                "id": 3,
                "type": "Fire Alert",
                "location": "Whitefield",
                "severity": "Critical",
                "status": "Responding"
            },
            {
                "id": 4,
                "type": "Traffic Incident",
                "location": "Marathahalli",
                "severity": "Medium",
                "status": "Monitoring"
            }
        ]
    }