const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API_KEY;

const LATITUDE = 12.9716;
const LONGITUDE = 77.5946;

// Get real-time traffic flow
export async function getTraffic() {
  const url =
    `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json` +
    `?point=${LATITUDE},${LONGITUDE}` +
    `&unit=KMPH` +
    `&openLr=false` +
    `&key=${TOMTOM_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Traffic API failed: ${response.status}`);
  }

  const data = await response.json();

  const flow = data.flowSegmentData;

  if (!flow) {
    throw new Error("No traffic data received");
  }

  const currentSpeed = Math.round(flow.currentSpeed);
  const freeFlowSpeed = Math.round(flow.freeFlowSpeed);

  // Calculate congestion percentage
  let congestion = 0;

  if (freeFlowSpeed > 0) {
    congestion = Math.round(
      ((freeFlowSpeed - currentSpeed) / freeFlowSpeed) * 100
    );
  }

  congestion = Math.max(0, Math.min(100, congestion));

  let congestionLevel = "Low";

  if (congestion >= 60) {
    congestionLevel = "High";
  } else if (congestion >= 30) {
    congestionLevel = "Moderate";
  }

  return {
    currentSpeed,
    freeFlowSpeed,
    congestion,
    congestionLevel,
    confidence: flow.confidence,
    roadClosure: flow.roadClosure,
  };
}


// Data specifically for the live traffic chart
export async function getTrafficChart() {
  const data = await getTraffic();

  return {
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),

    speed: data.currentSpeed,
    freeFlowSpeed: data.freeFlowSpeed,
  };
}