function EmergencyAlerts() {
  const alerts = [
    {
      message: "Emergency response team dispatched to Bellandur.",
      type: "critical",
      time: "5 min ago",
    },
    {
      message: "Traffic diversion activated near Silk Board Junction.",
      type: "warning",
      time: "14 min ago",
    },
    {
      message: "Fire emergency successfully contained in Electronic City.",
      type: "success",
      time: "32 min ago",
    },
  ];

  return (
    <div className="emergency-alerts-card">
      <div className="emergency-card-header">
        <div>
          <h2>Emergency Activity</h2>
          <p>Latest updates from the emergency response system</p>
        </div>
      </div>

      <div className="emergency-alert-list">
        {alerts.map((alert, index) => (
          <div className="emergency-alert-row" key={index}>
            <span className={`activity-dot ${alert.type}`}></span>

            <p>{alert.message}</p>

            <span>{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyAlerts;