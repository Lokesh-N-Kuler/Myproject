function AIEmergencyAnalysis() {
  return (
    <div className="ai-emergency-card">

      <div className="ai-emergency-header">
        <div>
          <h2>AI Emergency Recommendation</h2>
          <p>AI-powered priority analysis for emergency response</p>
        </div>

        <span className="ai-emergency-badge">
          AI ANALYSIS
        </span>
      </div>

      <div className="ai-emergency-content">

        <div className="emergency-priority">
          <p className="priority-label">
            HIGHEST PRIORITY INCIDENT
          </p>

          <h3>Severe Waterlogging — Bellandur</h3>

          <p>
            AI analysis suggests deploying additional emergency teams
            due to rapidly increasing water levels and traffic disruption.
          </p>

          <div className="priority-stats">
            <div>
              <span>Priority Score</span>
              <strong className="priority-red">96%</strong>
            </div>

            <div>
              <span>People Affected</span>
              <strong>2,400+</strong>
            </div>

            <div>
              <span>Recommended Teams</span>
              <strong>4 Teams</strong>
            </div>
          </div>
        </div>

        <div className="ai-actions">
          <h3>Recommended Actions</h3>

          <ul>
            <li>Deploy additional rescue teams immediately.</li>
            <li>Redirect traffic from affected roads.</li>
            <li>Send alerts to nearby residents.</li>
            <li>Activate temporary emergency shelters.</li>
          </ul>

          <button>
            Generate Response Plan
          </button>
        </div>

      </div>
    </div>
  );
}

export default AIEmergencyAnalysis;