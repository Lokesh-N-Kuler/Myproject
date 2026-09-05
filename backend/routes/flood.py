from fastapi import APIRouter

router = APIRouter(
    prefix="/api/flood",
    tags=["Flood"]
)


@router.get("/")
def get_flood_data():
    return {
        "stats": {
            "highRiskAreas": "08",
            "rainfall": "42 mm",
            "waterLevel": "3.8 m",
            "activeAlerts": "05"
        },

        "chart": [
            {"time": "6 AM", "rainfall": 12, "waterLevel": 2.1},
            {"time": "9 AM", "rainfall": 18, "waterLevel": 2.4},
            {"time": "12 PM", "rainfall": 32, "waterLevel": 2.9},
            {"time": "3 PM", "rainfall": 42, "waterLevel": 3.8},
            {"time": "6 PM", "rainfall": 28, "waterLevel": 3.3},
            {"time": "9 PM", "rainfall": 15, "waterLevel": 2.7}
        ],

        "prediction": {
            "area": "Bellandur",
            "description": "Current rainfall and water-level trends indicate a high probability of flooding in the next few hours.",
            "probability": "82%",
            "expectedTime": "2–4 hours",
            "riskLevel": "HIGH",
            "recommendations": [
                "Deploy emergency response teams.",
                "Alert residents in nearby areas.",
                "Monitor drainage and water levels.",
                "Prepare alternate traffic routes."
            ]
        },

        "alerts": [
            {
                "area": "Bellandur",
                "message": "Water level is rising rapidly. Emergency monitoring activated.",
                "level": "Critical",
                "time": "5 min ago"
            },
            {
                "area": "Koramangala",
                "message": "Heavy rainfall detected. Possible waterlogging in low-lying areas.",
                "level": "High",
                "time": "12 min ago"
            },
            {
                "area": "HSR Layout",
                "message": "Drainage capacity is being monitored due to continuous rainfall.",
                "level": "Medium",
                "time": "25 min ago"
            }
        ],

        "emergencyStatus": {
            "title": "Emergency Response Status",
            "message": "Response teams are currently monitoring high-risk zones."
        },
        "mapLocations": [
    {
        "name": "Koramangala",
        "risk": "high",
        "position": "default"
    },
    {
        "name": "HSR Layout",
        "risk": "medium",
        "position": "default"
    },
    {
        "name": "Indiranagar",
        "risk": "safe",
        "position": "default"
    },
    {
        "name": "Bellandur",
        "risk": "high",
        "position": "location-two"
    },
    {
        "name": "Whitefield",
        "risk": "medium",
        "position": "location-three"
    }
]
    }