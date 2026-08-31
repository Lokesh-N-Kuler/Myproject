import { useState } from "react";

function PollutantLevels() {
  const [pollutants] = useState([
    {
      name: "PM 2.5",
      value: "68",
      unit: "µg/m³",
      status: "High",
      level: "high",
    },
    {
      name: "PM 10",
      value: "112",
      unit: "µg/m³",
      status: "Moderate",
      level: "moderate",
    },
    {
      name: "NO₂",
      value: "42",
      unit: "µg/m³",
      status: "Moderate",
      level: "moderate",
    },
    {
      name: "SO₂",
      value: "18",
      unit: "µg/m³",
      status: "Good",
      level: "good",
    },
    {
      name: "CO",
      value: "1.2",
      unit: "mg/m³",
      status: "Good",
      level: "good",
    },
  ]);

  return (
    <div className="pollutant-card">
      <div className="pollution-card-header">
        <h2>Pollutant Levels</h2>
        <p>Current air pollutant readings</p>
      </div>

      <div className="pollutant-list">
        {pollutants.map((item, index) => (
          <div className="pollutant-row" key={index}>
            
            <div className="pollutant-info">
              <h4>{item.name}</h4>

              <span className={`pollutant-status ${item.level}`}>
                {item.status}
              </span>
            </div>

            <strong>
              {item.value}
              <small> {item.unit}</small>
            </strong>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PollutantLevels;