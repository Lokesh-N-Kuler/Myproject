function AICityInsights() {
  const insights = [
    {
      title: "Traffic Pattern Detected",
      text: "Traffic congestion is expected to increase by 18% during evening peak hours.",
    },
    {
      title: "Air Quality Warning",
      text: "PM 2.5 levels are rising in industrial and high-traffic zones.",
    },
    {
      title: "Emergency Response Improving",
      text: "Average emergency response time has improved compared to previous days.",
    },
  ];

  return (
    <div className="ai-city-card">

      <div className="ai-city-header">

        <div>
          <h2>AI City Insights</h2>

          <p>
            Intelligent insights generated from city data
          </p>
        </div>

        <span className="ai-city-badge">
          AI INSIGHTS
        </span>

      </div>

      <div className="insights-list">

        {insights.map((insight, index) => (
          <div className="insight-item" key={index}>

            <div className="insight-number">
              {index + 1}
            </div>

            <div>
              <h3>{insight.title}</h3>

              <p>{insight.text}</p>
            </div>

          </div>
        ))}

      </div>

      <button className="view-insights-btn">
        View Detailed Insights
      </button>

    </div>
  );
}

export default AICityInsights;