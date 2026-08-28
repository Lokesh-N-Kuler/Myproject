function RouteRecommendation() {
  return (
    <div className="route-card">
      <div className="route-header">
        <div>
          <h2>AI Route Recommendation</h2>
          <p>Smart route optimization based on current traffic</p>
        </div>

        <span className="ai-badge">AI ACTIVE</span>
      </div>

      <div className="route-alert">
        <strong>Heavy congestion detected</strong>
        <p>Silk Board Junction is experiencing unusually high traffic.</p>
      </div>

      <div className="route-details">
        <div className="route-point">
          <span className="route-dot start"></span>
          <div>
            <small>AVOID</small>
            <h4>Silk Board Junction</h4>
          </div>
        </div>

        <div className="route-line"></div>

        <div className="route-point">
          <span className="route-dot end"></span>
          <div>
            <small>RECOMMENDED ROUTE</small>
            <h4>Hosur Road → NICE Road</h4>
          </div>
        </div>
      </div>

      <div className="time-saved">
        <span>Estimated time saved</span>
        <strong>14 min</strong>
      </div>
    </div>
  );
}

export default RouteRecommendation;