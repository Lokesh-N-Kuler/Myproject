function AIPollutionAnalysis() {
  return (
    <div className="ai-pollution-card">

      <div className="ai-pollution-header">
        <div>
          <h2>AI Pollution Analysis</h2>
          <p>AI-powered analysis based on current air quality data</p>
        </div>

        <span className="ai-analysis-badge">
          AI ANALYSIS
        </span>
      </div>

      <div className="ai-pollution-content">

        {/* Prediction */}
        <div className="pollution-prediction">

          <p className="analysis-label">
            PREDICTED AIR QUALITY
          </p>

          <h3>Air Quality May Worsen</h3>

          <p className="analysis-text">
            Based on current AQI trends and pollutant levels, air quality
            is expected to worsen during peak traffic hours.
          </p>

          <div className="prediction-stats">

            <div className="prediction-stat">
              <span>Predicted AQI</span>
              <strong>178</strong>
            </div>

            <div className="prediction-stat">
              <span>Risk Level</span>
              <strong className="high-risk">HIGH</strong>
            </div>

            <div className="prediction-stat">
              <span>Expected Time</span>
              <strong>3–5 hrs</strong>
            </div>

          </div>

        </div>

        {/* Recommendations */}
        <div className="pollution-recommendations">

          <h3>Recommended Actions</h3>

          <ul>
            <li>Reduce traffic congestion in high-risk zones.</li>
            <li>Increase public transport availability.</li>
            <li>Monitor industrial emission sources.</li>
            <li>Issue health alerts for sensitive groups.</li>
          </ul>

          <button className="pollution-action-btn">
            View Detailed Analysis
          </button>

        </div>

      </div>
    </div>
  );
}

export default AIPollutionAnalysis;