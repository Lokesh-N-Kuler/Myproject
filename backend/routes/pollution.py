from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(
    prefix="/api/pollution",
    tags=["Pollution"]
)

LATITUDE = 12.9716
LONGITUDE = 77.5946


def get_aqi_status(aqi: int) -> str:
    if aqi <= 50:
        return "Good"
    elif aqi <= 100:
        return "Moderate"
    elif aqi <= 150:
        return "Unhealthy for Sensitive Groups"
    elif aqi <= 200:
        return "Unhealthy"
    elif aqi <= 300:
        return "Very Unhealthy"
    return "Hazardous"


@router.get("/")
async def get_pollution():

    url = "https://air-quality-api.open-meteo.com/v1/air-quality"

    params = {
        "latitude": LATITUDE,
        "longitude": LONGITUDE,

        "current": ",".join([
            "us_aqi",
            "pm2_5",
            "pm10",
            "carbon_monoxide",
            "nitrogen_dioxide",
            "sulphur_dioxide",
            "ozone"
        ]),

        "hourly": "us_aqi",

        "forecast_days": 1,

        "timezone": "Asia/Kolkata"
    }

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(url, params=params)

        response.raise_for_status()

        data = response.json()

        current = data["current"]
        hourly = data["hourly"]

        current_aqi = int(current["us_aqi"])

        hourly_aqi = []

        for time, aqi in zip(
            hourly["time"],
            hourly["us_aqi"]
        ):
            if aqi is not None:
                hourly_aqi.append({
                    "time": time,
                    "aqi": int(aqi)
                })

        return {
            "location": "Bengaluru",

            "aqi": current_aqi,

            "status": get_aqi_status(current_aqi),

            "pollutants": {
                "pm2_5": current["pm2_5"],
                "pm10": current["pm10"],
                "carbonMonoxide": current["carbon_monoxide"],
                "nitrogenDioxide": current["nitrogen_dioxide"],
                "sulphurDioxide": current["sulphur_dioxide"],
                "ozone": current["ozone"]
            },

            "hourly": hourly_aqi,

            "updatedAt": current["time"],

            "unit": {
                "pm": "μg/m³",
                "gas": "μg/m³"
            }
        }

    except httpx.HTTPError as error:
        raise HTTPException(
            status_code=502,
            detail=f"Air quality service unavailable: {error}"
        )