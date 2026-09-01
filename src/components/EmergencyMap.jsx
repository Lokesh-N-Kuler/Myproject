function EmergencyMap() {
  return (
    <div className="emergency-map-card">
      <div className="emergency-card-header">
        <div>
          <h2>Emergency Response Map</h2>
          <p>Live locations of incidents and response teams</p>
        </div>
      </div>

      <div className="emergency-map">
        <div className="map-point critical-point point-one">
           Bellandur
        </div>

        <div className="map-point high-point point-two">
          ⚠ Silk Board
        </div>

        <div className="map-point team-point point-three">
           Response Team
        </div>

        <div className="map-point high-point point-four">
           Electronic City
        </div>

        <div className="emergency-map-center">
          <h3>Live Emergency Map</h3>
          <p>Incident & response monitoring</p>
        </div>
      </div>
    </div>
  );
}

export default EmergencyMap;