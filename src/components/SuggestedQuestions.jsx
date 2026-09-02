function SuggestedQuestions() {
  const questions = [
    "What is the current traffic situation?",
    "Which areas have poor air quality?",
    "Is there any flood risk today?",
    "Show critical emergencies.",
    "What actions should the city take?",
  ];

  return (
    <div className="suggested-card">

      <h2>Ask City Pilot AI</h2>

      <p>
        Get instant insights from traffic, flood, pollution and emergency data.
      </p>

      <div className="question-list">

        {questions.map((question, index) => (
          <button key={index} className="question-button">
            {question}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SuggestedQuestions;