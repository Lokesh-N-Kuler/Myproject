import "../styles/traffic.css";

function TrafficMap() {
  return (
    <div className="traffic-map-card">

      <div className="map-header">
        <div>
          <h2>🗺 Live Traffic Map</h2>
          <p>Real-time city traffic monitoring</p>
        </div>

        <button className="refresh-btn">
          Refresh
        </button>
      </div>

      <div className="map-container">

        <div className="map-placeholder">

          <div className="marker accident">
            🚨
          </div>

          <div className="marker traffic">
            🚗
          </div>

          <div className="marker signal">
            🚦
          </div>

          <div className="marker road">
            🚧
          </div>

          <h3>Traffic Map</h3>

          <p>
            Google Maps / Leaflet Map will be integrated here
          </p>

        </div>

      </div>

    </div>
  );
}

export default TrafficMap;