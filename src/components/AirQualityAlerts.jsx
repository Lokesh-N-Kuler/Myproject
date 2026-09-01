function AirQualityAlerts() {
  const alerts = [
    {
      area: "Peenya Industrial Area",
      message:
        "AQI has reached unhealthy levels. Sensitive groups should limit outdoor activities.",
      level: "Critical",
      time: "5 min ago",
    },
    {
      area: "Silk Board",
      message:
        "High vehicle emissions detected due to heavy traffic congestion.",
      level: "High",
      time: "18 min ago",
    },
    {
      area: "Whitefield",
      message:
        "PM 2.5 levels are increasing and require continuous monitoring.",
      level: "Moderate",
      time: "32 min ago",
    },
  ];

  return (
    <div className="air-alerts-card">

      <div className="air-alerts-header">
        <div>
          <h2>Air Quality Alerts</h2>
          <p>Latest pollution alerts across the city</p>
        </div>

        <span className="air-alert-live">
          <span className="air-live-dot"></span>
          LIVE
        </span>
      </div>

      <div className="air-alert-list">
        {alerts.map((alert, index) => (
          <div className="air-alert-row" key={index}>

            <div className="air-alert-icon">
              ⚠
            </div>

            <div className="air-alert-info">

              <div className="air-alert-title">
                <h4>{alert.area}</h4>

                <span
                  className={`air-alert-level ${alert.level.toLowerCase()}`}
                >
                  {alert.level}
                </span>
              </div>

              <p>{alert.message}</p>
            </div>

            <span className="air-alert-time">
              {alert.time}
            </span>

          </div>
        ))}
      </div>

      <button className="view-all-alerts-btn">
        View All Alerts
      </button>

    </div>
  );
}

export default AirQualityAlerts;