function EmergencyIncidents() {
  const incidents = [
    {
      title: "Severe Waterlogging",
      location: "Bellandur",
      level: "Critical",
      time: "5 min ago",
    },
    {
      title: "Major Traffic Accident",
      location: "Silk Board Junction",
      level: "High",
      time: "12 min ago",
    },
    {
      title: "Fire Emergency",
      location: "Electronic City",
      level: "High",
      time: "18 min ago",
    },
    {
      title: "Road Blockage",
      location: "Whitefield",
      level: "Medium",
      time: "25 min ago",
    },
  ];

  return (
    <div className="incidents-card">
      <div className="emergency-card-header">
        <div>
          <h2>Active Incidents</h2>
          <p>Live emergency situations across the city</p>
        </div>

        <span className="incident-live">LIVE</span>
      </div>

      <div className="incident-list">
        {incidents.map((incident, index) => (
          <div className="incident-row" key={index}>
            <div className="incident-icon">
              🚨
            </div>

            <div className="incident-info">
              <div className="incident-title">
                <h4>{incident.title}</h4>

                <span
                  className={`incident-level ${incident.level.toLowerCase()}`}
                >
                  {incident.level}
                </span>
              </div>

              <p>{incident.location}</p>
            </div>

            <span className="incident-time">
              {incident.time}
            </span>
          </div>
        ))}
      </div>

      <button className="view-incidents-btn">
        View All Incidents
      </button>
    </div>
  );
}

export default EmergencyIncidents;