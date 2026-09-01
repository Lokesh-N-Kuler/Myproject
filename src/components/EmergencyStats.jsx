function EmergencyStats() {
  const stats = [
    {
      title: "Active Incidents",
      value: "12",
      subtitle: "Currently being monitored",
      type: "red",
    },
    {
      title: "Critical Alerts",
      value: "03",
      subtitle: "Immediate action required",
      type: "orange",
    },
    {
      title: "Response Teams",
      value: "28",
      subtitle: "Teams currently deployed",
      type: "blue",
    },
    {
      title: "Resolved Today",
      value: "47",
      subtitle: "Successfully handled",
      type: "green",
    },
  ];

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