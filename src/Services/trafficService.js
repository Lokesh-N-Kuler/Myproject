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
export async function getCongestionByArea() {
  const areas = [
    {
      area: "MG Road",
      latitude: 12.9756,
      longitude: 77.6063,
    },
    {
      area: "Indiranagar",
      latitude: 12.9784,
      longitude: 77.6408,
    },
    {
      area: "Whitefield",
      latitude: 12.9698,
      longitude: 77.7499,
    },
    {
      area: "Airport",
      latitude: 13.1986,
      longitude: 77.7066,
    },
    {
      area: "Electronic City",
      latitude: 12.8452,
      longitude: 77.6602,
    },
  ];

  const results = await Promise.all(
    areas.map(async (location) => {
      const url =
        `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json` +
        `?point=${location.latitude},${location.longitude}` +
        `&unit=KMPH` +
        `&openLr=false` +
        `&key=${TOMTOM_API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Traffic API failed for ${location.area}: ${response.status}`
        );
      }

      const data = await response.json();
      const flow = data.flowSegmentData;

      if (!flow) {
        return {
          area: location.area,
          traffic: 0,
        };
      }

      const currentSpeed = Number(flow.currentSpeed);
      const freeFlowSpeed = Number(flow.freeFlowSpeed);

      let congestion = 0;

      if (freeFlowSpeed > 0) {
        congestion = Math.round(
          ((freeFlowSpeed - currentSpeed) / freeFlowSpeed) * 100
        );
      }

      congestion = Math.max(0, Math.min(100, congestion));

      return {
        area: location.area,
        traffic: congestion,
      };
    })
  );

  return results;
}
export async function getSignalStatus() {
  const intersections = [
    {
      name: "MG Road Junction",
      latitude: 12.9756,
      longitude: 77.6063,
    },
    {
      name: "Indiranagar Junction",
      latitude: 12.9784,
      longitude: 77.6408,
    },
    {
      name: "Whitefield Junction",
      latitude: 12.9698,
      longitude: 77.7499,
    },
  ];

  const results = await Promise.all(
    intersections.map(async (intersection) => {
      const url =
        `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json` +
        `?point=${intersection.latitude},${intersection.longitude}` +
        `&unit=KMPH` +
        `&openLr=false` +
        `&key=${TOMTOM_API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Signal traffic API failed: ${response.status}`
        );
      }

      const data = await response.json();
      const flow = data.flowSegmentData;

      if (!flow) {
        return {
          name: intersection.name,
          status: "No Data",
          speed: null,
        };
      }

      const currentSpeed = Math.round(flow.currentSpeed);
      const freeFlowSpeed = Math.round(flow.freeFlowSpeed);

      const congestion =
        freeFlowSpeed > 0
          ? Math.round(
              ((freeFlowSpeed - currentSpeed) /
                freeFlowSpeed) *
                100
            )
          : 0;

      let status = "Normal";

      if (congestion >= 60) {
        status = "Heavy";
      } else if (congestion >= 30) {
        status = "Moderate";
      }

      return {
        name: intersection.name,
        status,
        speed: currentSpeed,
        congestion,
      };
    })
  );

  return results;
  
}
// Get real road closure / restriction incidents
export async function getRoadClosures() {
  const bbox = "77.50,12.85,77.80,13.15";

  const url =
    `https://api.tomtom.com/traffic/services/5/incidentDetails` +
    `?bbox=${bbox}` +
    `&fields={incidents{type,geometry{type,coordinates},properties{iconCategory,magnitudeOfDelay,events{description}}}}` +
    `&language=en-GB` +
    `&timeValidityFilter=present` +
    `&key=${TOMTOM_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Road closure API failed: ${response.status}`
    );
  }

  const data = await response.json();

  const incidents = data.incidents || [];

  const closures = incidents
    .filter((incident) => {
      const category =
        incident.properties?.iconCategory;

      return category === 8;
    })
    .map((incident, index) => {
      const properties = incident.properties || {};
      const events = properties.events || [];

      const reason =
        events.length > 0 && events[0].description
          ? events[0].description
          : "Road closure";

      return {
        id: index,
        road: "Road closure detected",
        reason,
        status: "Closed",
        delay: properties.magnitudeOfDelay || 0,
      };
    });

  // Show maximum 5 closures
  return closures.slice(0, 5);
}