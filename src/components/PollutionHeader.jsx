function PollutionHeader() {
  return (
    <div className="pollution-header">
      <div>
        <h1>🌫 Pollution Monitoring</h1>
        <p>Monitor air quality and pollution levels across the city</p>
      </div>

      <div className="pollution-live-status">
        <span className="pollution-live-dot"></span>
        <span>Live Monitoring</span>
      </div>
    </div>
  );
}

export default PollutionHeader;