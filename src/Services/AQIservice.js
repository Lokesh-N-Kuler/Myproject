export async function getAQI() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/pollution/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch AQI data");
  }

  return response.json();
}