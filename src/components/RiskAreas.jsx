function RiskAreas() {
  const areas = [
    {
      name: "Bellandur",
      level: "High Risk",
      status: "high",
      water: "4.2 m",
    },
    {
      name: "Koramangala",
      level: "High Risk",
      status: "high",
      water: "3.9 m",
    },
    {
      name: "HSR Layout",
      level: "Medium Risk",
      status: "medium",
      water: "3.1 m",
    },
    {
      name: "Whitefield",
      level: "Medium Risk",
      status: "medium",
      water: "2.8 m",
    },
  ];

  return (
    <div className="risk-areas-card">
      <div className="risk-header">
        <div>
          <h2>⚠ High-Risk Areas</h2>
          <p>Areas requiring monitoring</p>
        </div>
      </div>

      <div className="risk-list">
        {areas.map((area, index) => (
          <div className="risk-row" key={index}>
            <div className="risk-location">
              <span className={`risk-dot ${area.status}`}></span>

              <div>
                <h4>{area.name}</h4>
                <p>{area.level}</p>
              </div>
            </div>

            <strong>{area.water}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiskAreas;