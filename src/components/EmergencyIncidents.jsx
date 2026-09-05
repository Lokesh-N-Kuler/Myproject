import { useEffect, useState } from "react";
import { getEmergencyData } from "../Services/EmergencyService";

function EmergencyIncidents() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      try {
        const data = await getEmergencyData();
        setIncidents(data.incidents);
      } catch (error) {
        console.log(error);
      }
    }

    loadIncidents();
  }, []);

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