import { useEffect, useState } from "react";
import { getFloodData } from "../Services/FloodService";

function FloodAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [emergencyStatus, setEmergencyStatus] = useState(null);

  useEffect(() => {
    async function loadFloodAlerts() {
      try {
        const data = await getFloodData();

        setAlerts(data.alerts);
        setEmergencyStatus(data.emergencyStatus);
      } catch (error) {
        console.log(error);
      }
    }

    loadFloodAlerts();
  }, []);

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
          <h3>
            {emergencyStatus?.title || "Emergency Response Status"}
          </h3>

          <p>
            {emergencyStatus?.message ||
              "Loading emergency status..."}
          </p>
        </div>

        <button className="emergency-btn">
          View Emergency Details
        </button>
      </div>
    </div>
  );
}

export default FloodAlerts;