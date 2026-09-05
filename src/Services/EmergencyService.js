export async function getEmergencyData() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/emergency/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch emergency data");
  }

  return response.json();
}