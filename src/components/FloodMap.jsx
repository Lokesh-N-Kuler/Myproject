import { useEffect, useState } from "react";
import "../styles/flood.css";
import { getFloodData } from "../Services/FloodService";

function FloodMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function loadFloodMap() {
      try {
        const data = await getFloodData();
        setLocations(data.mapLocations);
      } catch (error) {
        console.log(error);
      }
    }

    loadFloodMap();
  }, []);

  return (
    <div className="flood-map-card">

      <div className="flood-map-header">
        <div>
          <h2>Flood Risk Map</h2>
          <p>Real-time monitoring of flood-prone areas</p>
        </div>

        <div className="map-legend">
          <span>
            <i className="safe-dot"></i>
            Safe
          </span>

          <span>
            <i className="medium-dot"></i>
            Medium Risk
          </span>

          <span>
            <i className="high-dot"></i>
            High Risk
          </span>
        </div>
      </div>

      <div className="flood-map">
        <div className="map-background">

          {locations.map((location, index) => (
            <div
              key={index}
              className={`flood-location ${location.risk}-location ${location.position}`}
            >
              <span className="location-dot"></span>
              <p>{location.name}</p>
            </div>
          ))}

          <div className="map-center-text">
            <h3>Live Flood Monitoring</h3>
            <p>Risk zones across the city</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default FloodMap;