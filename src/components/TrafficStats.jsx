function TrafficStats() {

  const stats = [
    {
      title: "Active Vehicles",
      value: "12,480",
      color: "#2563eb",
    },
    {
      title: "Average Speed",
      value: "42 km/h",
      color: "#10b981",
    },
    {
      title: "Congestion",
      value: "68%",
      color: "#f59e0b",
    },
    {
      title: "Accidents",
      value: "07",
      color: "#ef4444",
    },
  ];

  return (
    <div className="traffic-stats">

      {stats.map((item, index) => (

        <div className="traffic-card" key={index}>

          <h4>{item.title}</h4>

          <h2 style={{ color: item.color }}>
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default TrafficStats;