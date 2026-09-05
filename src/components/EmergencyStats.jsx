import { useEffect, useState } from "react";
import { getEmergencyData } from "../services/EmergencyService";

function EmergencyStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function loadEmergencyData() {
      try {
        const data = await getEmergencyData();

        setStats([
          {
            title: "Active Incidents",
            value: data.stats.activeIncidents,
            subtitle: "Currently being monitored",
            type: "red",
          },
          {
            title: "Critical Alerts",
            value: data.stats.criticalAlerts,
            subtitle: "Immediate action required",
            type: "orange",
          },
          {
            title: "Response Teams",
            value: data.stats.responseTeams,
            subtitle: "Teams currently deployed",
            type: "blue",
          },
          {
            title: "Resolved Today",
            value: data.stats.resolvedToday,
            subtitle: "Successfully handled",
            type: "green",
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }

    loadEmergencyData();
  }, []);

  return (
    <div className="emergency-stats">
      {stats.map((item, index) => (
        <div className="emergency-stat-card" key={index}>
          <p>{item.title}</p>

          <h2 className={item.type}>
            {item.value}
          </h2>

          <span>{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}

export default EmergencyStats;