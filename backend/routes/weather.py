from fastapi import APIRouter

router = APIRouter(
    prefix="/api/weather",
    tags=["Weather"]
)


@router.get("/")
def get_weather():
    return {
        "city": "Bengaluru",
        "temperature": 26,
        "feels_like": 27,
        "humidity": 68,
        "condition": "Cloudy",
        "wind_speed": 12,
        "rainfall": 2.4,

        "forecast": [
            {
                "day": "Today",
                "temperature": 26,
                "condition": "Cloudy"
            },
            {
                "day": "Tomorrow",
                "temperature": 27,
                "condition": "Partly Cloudy"
            },
            {
                "day": "Day 3",
                "temperature": 25,
                "condition": "Rain"
            }
        ]
    }
from fastapi import APIRouter

router = APIRouter(
    prefix="/api/weather",
    tags=["Weather"]
)


@router.get("/")
def get_weather():
    return {
        "name": "Bengaluru",

        "main": {
            "temp": 26,
            "humidity": 68
        },

        "weather": [
            {
                "main": "Cloudy"
            }
        ],

        "wind": {
            "speed": 12
        }
    }