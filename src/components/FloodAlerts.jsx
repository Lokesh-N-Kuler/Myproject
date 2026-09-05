function FloodAlerts() {
  const alerts = [
    {
      area: "Bellandur",
      message: "Water level is rising rapidly. Emergency monitoring activated.",
      level: "Critical",
      time: "5 min ago",
    },
    {
      area: "Koramangala",
      message: "Heavy rainfall detected. Possible waterlogging in low-lying areas.",
      level: "High",
      time: "12 min ago",
    },
    {
      area: "HSR Layout",
      message: "Drainage capacity is being monitored due to continuous rainfall.",
      level: "Medium",
      time: "25 min ago",
    },
  ];

  return (
    <div className="flood-alerts-card">
      <div className="flood-alerts-header">
        <div>
          <h2>Flood Alerts & Emergency Status</h2>
          <p>Latest alerts from monitored areas</p>
        </div>

        <span className="alerts-live">
          <span className="alert-live-dot"></span>
          LIVE
        </span>
      </div>

      <div className="flood-alert-list">
        {alerts.map((alert, index) => (
          <div className="flood-alert-row" key={index}>
            <div className="alert-icon">
              ⚠
            </div>

            <div className="alert-info">
              <div className="alert-title-row">
                <h4>{alert.area}</h4>

                <span
                  className={`alert-level ${alert.level.toLowerCase()}`}
                >
                  {alert.level}
                </span>
              </div>

              <p>{alert.message}</p>
            </div>

            <span className="alert-time">
              {alert.time}
            </span>
          </div>
        ))}
      </div>

      <div className="emergency-status">
        <div>
          <h3>Emergency Response Status</h3>
          <p>Response teams are currently monitoring high-risk zones.</p>
        </div>

        <button className="emergency-btn">
          View Emergency Details
        </button>
      </div>
    </div>
  );
}

export default FloodAlerts;