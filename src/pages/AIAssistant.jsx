import AIHeader from "../components/AIHeader";
import AIStatusSummary from "../components/AIStatusSummary";
import SuggestedQuestions from "../components/SuggestedQuestions";
import ChatBox from "../components/ChatBox";

import "../styles/aiassistant.css";

function AIAssistant() {
  return (
    <section id="ai-assistant" className="ai-assistant-page">
      <AIHeader />

      <AIStatusSummary />

      <div className="ai-main-section">
        <SuggestedQuestions />
        <ChatBox />
      </div>
    </section>
  );
}

export default AIAssistant;