from fastapi import APIRouter

router = APIRouter(
    prefix="/api/emergency",
    tags=["Emergency"]
)


@router.get("/")
def get_emergency_data():
    return {
        "stats": {
            "activeIncidents": "12",
            "criticalAlerts": "03",
            "responseTeams": "28",
            "resolvedToday": "47"
        },

        "incidents": [
            {
                "title": "Severe Waterlogging",
                "location": "Bellandur",
                "level": "Critical",
                "time": "5 min ago"
            },
            {
                "title": "Major Traffic Accident",
                "location": "Silk Board Junction",
                "level": "High",
                "time": "12 min ago"
            },
            {
                "title": "Fire Emergency",
                "location": "Electronic City",
                "level": "High",
                "time": "18 min ago"
            },
            {
                "title": "Road Blockage",
                "location": "Whitefield",
                "level": "Medium",
                "time": "25 min ago"
            }
        ],

        "alerts": [
            {
                "message": "Emergency response team dispatched to Bellandur.",
                "type": "critical",
                "time": "5 min ago"
            },
            {
                "message": "Traffic diversion activated near Silk Board Junction.",
                "type": "warning",
                "time": "14 min ago"
            },
            {
                "message": "Fire emergency successfully contained in Electronic City.",
                "type": "success",
                "time": "32 min ago"
            }
        ],

        "mapPoints": [
            {
                "label": "Bellandur",
                "type": "critical",
                "position": "point-one"
            },
            {
                "label": "⚠ Silk Board",
                "type": "high",
                "position": "point-two"
            },
            {
                "label": "Response Team",
                "type": "team",
                "position": "point-three"
            },
            {
                "label": "Electronic City",
                "type": "high",
                "position": "point-four"
            }
        ],
        "responseTeams": [
    {
        "name": "Fire & Rescue Team",
        "available": "6 teams active",
        "status": "active"
    },
    {
        "name": "Medical Response",
        "available": "8 teams active",
        "status": "active"
    },
    {
        "name": "Police Units",
        "available": "10 units active",
        "status": "active"
    },
    {
        "name": "Disaster Response",
        "available": "4 teams standby",
        "status": "standby"
    }
],

"aiAnalysis": {
    "incident": "Severe Waterlogging — Bellandur",
    "description": "AI analysis suggests deploying additional emergency teams due to rapidly increasing water levels and traffic disruption.",
    "priorityScore": "96%",
    "peopleAffected": "2,400+",
    "recommendedTeams": "4 Teams",
    "actions": [
        "Deploy additional rescue teams immediately.",
        "Redirect traffic from affected roads.",
        "Send alerts to nearby residents.",
        "Activate temporary emergency shelters."
    ]
}
    }