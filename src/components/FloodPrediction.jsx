import { useEffect, useState } from "react";
import { getFloodData } from "../Services/FloodService";

function FloodPrediction() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function loadFloodPrediction() {
      try {
        const data = await getFloodData();
        setPrediction(data.prediction);
      } catch (error) {
        console.log(error);
      }
    }

    loadFloodPrediction();
  }, []);

  if (!prediction) {
    return <div className="flood-prediction-card">Loading...</div>;
  }

  return (
    <div className="flood-prediction-card">

      <div className="prediction-header">
        <div>
          <h2>AI Flood Prediction</h2>
          <p>AI analysis based on rainfall and water-level patterns</p>
        </div>

        <span className="ai-status">AI ANALYSIS</span>
      </div>

      <div className="prediction-content">

        <div className="prediction-main">
          <p className="prediction-label">PREDICTED HIGH-RISK AREA</p>

          <h3>{prediction.area}</h3>

          <p className="prediction-text">
            {prediction.description}
          </p>

          <div className="prediction-details">

            <div className="prediction-item">
              <span>Flood Probability</span>
              <strong className="danger-text">
                {prediction.probability}
              </strong>
            </div>

            <div className="prediction-item">
              <span>Expected Time</span>
              <strong>{prediction.expectedTime}</strong>
            </div>

            <div className="prediction-item">
              <span>Risk Level</span>
              <strong className="high-risk-text">
                {prediction.riskLevel}
              </strong>
            </div>

          </div>
        </div>

        <div className="recommendation-box">

          <h3>Recommended Actions</h3>

          <ul>
            {prediction.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button className="action-btn">
            View Emergency Plan
          </button>

        </div>

      </div>

    </div>
  );
}

export default FloodPrediction;