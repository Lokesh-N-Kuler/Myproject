export async function getTraffic() {
  const response = await fetch("http://127.0.0.1:8000/api/traffic/");

  if (!response.ok) {
    throw new Error("Failed to fetch traffic data");
  }

  const data = await response.json();

  return data.chart_data;
}