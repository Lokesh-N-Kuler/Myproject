export async function getTraffic() {
const response = await fetch("http://127.0.0.1:8000/api/traffic/");

if (!response.ok) {
throw new Error("Failed to fetch traffic data");
}

return response.json();
}

export async function getTrafficChart() {
const data = await getTraffic();

return data.chart_data || [];
}
