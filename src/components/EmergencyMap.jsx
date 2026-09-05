import { useEffect, useState } from "react";
import { getEmergencyData } from "../Services/EmergencyService";

function EmergencyMap() {
  const [mapPoints, setMapPoints] = useState([]);

  useEffect(() => {
    async function loadMapData() {
      try {
        const data = await getEmergencyData();
        setMapPoints(data.mapPoints);
      } catch (error) {
        console.log(error);
      }
    }

    loadMapData();
  }, []);

  return (
    <div className="emergency-map-card">
      <div className="emergency-card-header">
        <div>
          <h2>Emergency Response Map</h2>
          <p>Live locations of incidents and response teams</p>
        </div>
      </div>

      <div className="emergency-map">

        {mapPoints.map((point, index) => (
          <div
            key={index}
            className={`map-point ${point.type}-point ${point.position}`}
          >
            {point.label}
          </div>
        ))}

        <div className="emergency-map-center">
          <h3>Live Emergency Map</h3>
          <p>Incident & response monitoring</p>
        </div>

      </div>
    </div>
  );
}

export default EmergencyMap;