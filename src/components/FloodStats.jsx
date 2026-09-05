import { useEffect, useState } from "react";
import { getFloodData } from "../services/FloodService";

function FloodStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function loadFloodData() {
      try {
        const data = await getFloodData();

        setStats([
          {
            title: "High Risk Areas",
            value: data.stats.highRiskAreas,
            subtitle: "Areas need attention",
            type: "danger",
          },
          {
            title: "Rainfall",
            value: data.stats.rainfall,
            subtitle: "Last 24 hours",
            type: "blue",
          },
          {
            title: "Water Level",
            value: data.stats.waterLevel,
            subtitle: "Average river level",
            type: "warning",
          },
          {
            title: "Active Alerts",
            value: data.stats.activeAlerts,
            subtitle: "Emergency notifications",
            type: "danger",
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }

    loadFloodData();
  }, []);

  return (
    <div className="flood-stats">
      {stats.map((item, index) => (
        <div className="flood-stat-card" key={index}>
          <p className="flood-stat-title">{item.title}</p>

          <h2 className={`flood-stat-value ${item.type}`}>
            {item.value}
          </h2>

          <p className="flood-stat-subtitle">
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FloodStats;