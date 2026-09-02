function AIStatusSummary() {
  const status = [
    {
      title: "Traffic",
      value: "Moderate",
      description: "Some congestion detected",
      type: "blue",
    },
    {
      title: "Flood Risk",
      value: "Low",
      description: "No major flood threats",
      type: "green",
    },
    {
      title: "Air Quality",
      value: "Moderate",
      description: "AQI requires monitoring",
      type: "orange",
    },
    {
      title: "Emergency",
      value: "12 Active",
      description: "3 critical incidents",
      type: "red",
    },
  ];

  return (
    <div className="ai-status-summary">

      {status.map((item, index) => (
        <div className="ai-status-card" key={index}>

          <p>{item.title}</p>

          <h3 className={item.type}>
            {item.value}
          </h3>

          <span>{item.description}</span>

        </div>
      ))}

    </div>
  );
}

export default AIStatusSummary;