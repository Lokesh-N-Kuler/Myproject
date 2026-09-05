import { useEffect, useState } from "react";
import { getEmergencyData } from "../Services/EmergencyService";

function EmergencyAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function loadAlerts() {
      try {
        const data = await getEmergencyData();
        setAlerts(data.alerts);
      } catch (error) {
        console.log(error);
      }
    }

    loadAlerts();
  }, []);

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