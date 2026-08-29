function FloodStats() {
  const stats = [
    {
      title: "High Risk Areas",
      value: "08",
      subtitle: "Areas need attention",
      type: "danger",
    },
    {
      title: "Rainfall",
      value: "42 mm",
      subtitle: "Last 24 hours",
      type: "blue",
    },
    {
      title: "Water Level",
      value: "3.8 m",
      subtitle: "Average river level",
      type: "warning",
    },
    {
      title: "Active Alerts",
      value: "05",
      subtitle: "Emergency notifications",
      type: "danger",
    },
  ];

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