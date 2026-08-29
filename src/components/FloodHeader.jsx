function FloodHeader() {
  return (
    <div className="flood-header">
      <div>
        <h1>🌊 Flood Monitoring & Prediction</h1>
        <p>Monitor flood risks and predict potential affected areas</p>
      </div>

      <div className="flood-live-status">
        <span className="flood-live-dot"></span>
        <span>Live Monitoring</span>
      </div>
    </div>
  );
}

export default FloodHeader;