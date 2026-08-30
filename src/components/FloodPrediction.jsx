function FloodPrediction() {
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

          <h3>Bellandur</h3>

          <p className="prediction-text">
            Current rainfall and water-level trends indicate a high
            probability of flooding in the next few hours.
          </p>

          <div className="prediction-details">

            <div className="prediction-item">
              <span>Flood Probability</span>
              <strong className="danger-text">82%</strong>
            </div>

            <div className="prediction-item">
              <span>Expected Time</span>
              <strong>2–4 hours</strong>
            </div>

            <div className="prediction-item">
              <span>Risk Level</span>
              <strong className="high-risk-text">HIGH</strong>
            </div>

          </div>
        </div>

        <div className="recommendation-box">

          <h3>Recommended Actions</h3>

          <ul>
            <li>Deploy emergency response teams.</li>
            <li>Alert residents in nearby areas.</li>
            <li>Monitor drainage and water levels.</li>
            <li>Prepare alternate traffic routes.</li>
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