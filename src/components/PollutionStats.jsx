function PollutionStats() {
  const stats = [
    {
      title: "Current AQI",
      value: "142",
      subtitle: "Unhealthy for sensitive groups",
      type: "warning",
    },
    {
      title: "PM 2.5",
      value: "68 µg/m³",
      subtitle: "Fine particulate matter",
      type: "danger",
    },
    {
      title: "PM 10",
      value: "112 µg/m³",
      subtitle: "Particulate pollution",
      type: "warning",
    },
    {
      title: "Affected Areas",
      value: "12",
      subtitle: "Areas with poor air quality",
      type: "danger",
    },
  ];

  return (
    <div className="pollution-stats">
      {stats.map((item, index) => (
        <div className="pollution-stat-card" key={index}>
          <p className="pollution-stat-title">
            {item.title}
          </p>

          <h2 className={`pollution-stat-value ${item.type}`}>
            {item.value}
          </h2>

          <p className="pollution-stat-subtitle">
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PollutionStats;