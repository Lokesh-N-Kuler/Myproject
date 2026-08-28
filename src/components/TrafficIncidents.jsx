import "../styles/traffic.css";

function TrafficIncidents() {
  const incidents = [
    {
      type: "Accident",
      location: "MG Road Junction",
      description: "Two vehicles involved. Traffic moving slowly.",
      time: "2 min ago",
      status: "High",
    },
    {
      type: "Heavy Traffic",
      location: "Silk Board Junction",
      description: "Severe congestion detected in both directions.",
      time: "5 min ago",
      status: "Medium",
    },
    {
      type: "Road Work",
      location: "Old Airport Road",
      description: "One lane temporarily closed for maintenance.",
      time: "12 min ago",
      status: "Low",
    },
    {
      type: "Signal Issue",
      location: "Whitefield Main Road",
      description: "Traffic signal operating with a delay.",
      time: "18 min ago",
      status: "Medium",
    },
  ];

  return (
    <div className="incidents-card">

      <div className="incidents-header">
        <div>
          <h2>🚨 Live Traffic Incidents</h2>
          <p>Recent incidents detected across the city</p>
        </div>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="incident-list">

        {incidents.map((incident, index) => (
          <div className="incident-row" key={index}>

            <div className="incident-info">

              <div className="incident-title">
                <h4>{incident.type}</h4>

                <span
                  className={`incident-status ${incident.status.toLowerCase()}`}
                >
                  {incident.status}
                </span>
              </div>

              <h5>{incident.location}</h5>

              <p>{incident.description}</p>

            </div>

            <span className="incident-time">
              {incident.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TrafficIncidents;