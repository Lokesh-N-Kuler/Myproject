export async function getTraffic() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/traffic/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch traffic data");
  }

  const data = await response.json();

  console.log("TRAFFIC DATA:", data);

  return data;
}

export async function getTrafficChart() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/traffic/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch traffic chart data");
  }

  const data = await response.json();

  console.log("TRAFFIC CHART DATA:", data);

  return {
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    speed: Number(data.currentSpeed) || 0,
  };
}
