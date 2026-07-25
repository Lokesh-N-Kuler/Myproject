import "../styles/recentAlerts.css";

function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      type: "Accident",
      location: "MG Road",
      severity: "High",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "Flood Warning",
      location: "Whitefield",
      severity: "Medium",
      time: "10 mins ago",
    },
    {
      id: 3,
      type: "Poor Air Quality",
      location: "Electronic City",
      severity: "Low",
      time: "18 mins ago",
    },
    {
      id: 4,
      type: "Traffic Congestion",
      location: "Silk Board",
      severity: "High",
      time: "25 mins ago",
    },
  ];

  return (
    <div className="alerts-card">

      <div className="alerts-header">
        <h2>🚨 Recent Alerts</h2>
        <span>4 Active</span>
      </div>

      {alerts.map((alert) => (
        <div className="alert-item" key={alert.id}>

          <div className="alert-info">
            <h4>{alert.type}</h4>
            <p>{alert.location}</p>
          </div>

          <div className="alert-right">
            <span className={`severity ${alert.severity.toLowerCase()}`}>
              {alert.severity}
            </span>

            <small>{alert.time}</small>
          </div>

        </div>
      ))}

    </div>
  );
}

export default RecentAlerts;