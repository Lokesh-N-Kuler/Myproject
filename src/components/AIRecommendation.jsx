import "../styles/aiRecommendation.css";

function AIRecommendation() {
  return (
    <div className="ai-card">

      <div className="ai-header">
        <h2> AI Recommendation</h2>
        <span className="status">Live</span>
      </div>

      <div className="recommendation">

        <h3>Traffic Prediction</h3>

        <p>
          Heavy congestion is predicted near <b>MG Road</b>
          within the next <b>20 minutes</b>.
        </p>

      </div>

      <div className="recommendation">

        <h3>Suggested Actions</h3>

        <ul>
          <li>Increase signal timing by 20 seconds</li>
          <li>Redirect vehicles to Cubbon Road</li>
          <li>Notify nearby drivers</li>
        </ul>

      </div>

      <div className="recommendation">

        <h3>Confidence</h3>

        <div className="confidence-bar">

          <div className="progress"></div>

        </div>

        <p>92% Confidence</p>

      </div>

    </div>
  );
}

export default AIRecommendation