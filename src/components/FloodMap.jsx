import "../styles/flood.css";

function FloodMap() {
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

          <div className="flood-location high-location">
            <span className="location-dot"></span>
            <p>Koramangala</p>
          </div>

          <div className="flood-location medium-location">
            <span className="location-dot"></span>
            <p>HSR Layout</p>
          </div>

          <div className="flood-location safe-location">
            <span className="location-dot"></span>
            <p>Indiranagar</p>
          </div>

          <div className="flood-location high-location location-two">
            <span className="location-dot"></span>
            <p>Bellandur</p>
          </div>

          <div className="flood-location medium-location location-three">
            <span className="location-dot"></span>
            <p>Whitefield</p>
          </div>

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