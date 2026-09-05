export async function getFloodData() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/flood/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch flood data");
  }

  return response.json();
}