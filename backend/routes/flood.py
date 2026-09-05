from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(
    prefix="/api/flood",
    tags=["Flood"]
)

LATITUDE = 12.9716
LONGITUDE = 77.5946


def calculate_flood_risk(rainfall):
    if rainfall >= 50:
        return "High", 80
    elif rainfall >= 25:
        return "Moderate", 55
    elif rainfall >= 10:
        return "Low", 30
    else:
        return "Very Low", 10


@router.get("/")
async def get_flood_data():

    url = "https://api.open-meteo.com/v1/forecast"

    params = {
        "latitude": LATITUDE,
        "longitude": LONGITUDE,
        "current": "rain,precipitation",
        "hourly": "precipitation,rain",
        "forecast_days": 1,
        "timezone": "Asia/Kolkata"
    }

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(url, params=params)

        response.raise_for_status()

        data = response.json()

        current = data.get("current", {})
        hourly = data.get("hourly", {})

        rainfall = float(current.get("precipitation", 0) or 0)

        risk_level, risk_score = calculate_flood_risk(rainfall)

        chart_data = []

        times = hourly.get("time", [])
        rainfall_values = hourly.get("precipitation", [])

        for time, value in zip(times, rainfall_values):

            if value is None:
                continue

            chart_data.append({
    "time": time,
    "rainfall": float(value)
})

        return {
            "location": "Bengaluru",

            "risk_level": risk_level,

            "riskLevel": risk_level,

            "risk_score": risk_score,

            "affected_areas": 0,

            "water_level": 0,

            "rainfall": rainfall,

            "risk_areas": [],

            "chart_data": chart_data,

            "updatedAt": current.get("time")
        }

    except httpx.HTTPError as error:

        raise HTTPException(
            status_code=502,
            detail=f"Weather service unavailable: {error}"
        )

