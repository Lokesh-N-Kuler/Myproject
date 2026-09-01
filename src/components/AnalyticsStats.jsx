function AnalyticsStats() {
  const stats = [
    {
      title: "City Health Score",
      value: "82%",
      description: "Overall city performance",
      type: "blue",
    },
    {
      title: "Traffic Efficiency",
      value: "76%",
      description: "Average traffic flow",
      type: "green",
    },
    {
      title: "Air Quality Score",
      value: "68",
      description: "Current AQI average",
      type: "orange",
    },
    {
      title: "Emergency Response",
      value: "8.4 min",
      description: "Average response time",
      type: "red",
    },
  ];

  return (
    <div className="analytics-stats">
      {stats.map((stat, index) => (
        <div className="analytics-stat-card" key={index}>

          <p>{stat.title}</p>

          <h2 className={stat.type}>
            {stat.value}
          </h2>

          <span>{stat.description}</span>

        </div>
      ))}
    </div>
  );
}

export default AnalyticsStats;