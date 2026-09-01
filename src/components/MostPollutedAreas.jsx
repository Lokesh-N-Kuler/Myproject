function MostPollutedAreas() {
  const areas = [
    {
      name: "Peenya Industrial Area",
      aqi: 186,
      status: "Poor",
      level: "high",
    },
    {
      name: "Silk Board",
      aqi: 172,
      status: "Unhealthy",
      level: "high",
    },
    {
      name: "Whitefield",
      aqi: 148,
      status: "Moderate",
      level: "moderate",
    },
    {
      name: "Electronic City",
      aqi: 132,
      status: "Moderate",
      level: "moderate",
    },
    {
      name: "Indiranagar",
      aqi: 98,
      status: "Good",
      level: "good",
    },
  ];

  return (
    <div className="polluted-areas-card">
      <div className="pollution-card-header">
        <div>
          <h2>Most Polluted Areas</h2>
          <p>Areas ranked by current Air Quality Index</p>
        </div>

        <span className="areas-live">LIVE DATA</span>
      </div>

      <div className="polluted-areas-list">
        {areas.map((area, index) => (
          <div className="polluted-area-row" key={index}>
            
            <div className="area-rank">
              {index + 1}
            </div>

            <div className="area-info">
              <h4>{area.name}</h4>

              <span className={`area-status ${area.level}`}>
                {area.status}
              </span>
            </div>

            <div className="area-aqi">
              <strong>{area.aqi}</strong>
              <span>AQI</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default MostPollutedAreas;