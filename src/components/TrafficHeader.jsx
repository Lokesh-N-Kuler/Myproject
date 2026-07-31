function TrafficHeader() {
  return (
    <div className="traffic-header">

      <div>
        <h1>🚗 Traffic Management</h1>
        <p>Monitor city traffic in real time</p>
      </div>

      <div className="traffic-status">
        <span className="live-dot"></span>
        <span>Live</span>
      </div>

    </div>
  );
}

export default TrafficHeader;