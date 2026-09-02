import { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am City Pilot AI. Ask me anything about traffic, floods, pollution or emergencies.",
    },
  ]);

  const [input, setInput] = useState("");

  function getAIResponse(question) {
    const text = question.toLowerCase();

    if (text.includes("traffic")) {
      return "Traffic is currently moderate. Heavy congestion is expected near Silk Board and Bellandur during peak hours.";
    }

    if (text.includes("pollution") || text.includes("air")) {
      return "Air quality is currently moderate. PM 2.5 levels are increasing in high traffic and industrial areas.";
    }

    if (text.includes("flood")) {
      return "Flood risk is currently low. However, some low-lying areas are being continuously monitored.";
    }

    if (text.includes("emergency")) {
      return "There are currently 12 active incidents, including 3 high-priority emergencies requiring immediate attention.";
    }

    if (text.includes("city") || text.includes("status")) {
      return "The overall city health score is 82%. Traffic and emergency response are stable, while air quality requires attention.";
    }

    return "Based on the current city data, I recommend monitoring traffic congestion, air quality and emergency incidents closely.";
  }

  function handleSend() {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const aiMessage = {
      sender: "ai",
      text: getAIResponse(input),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="chat-card">

      <div className="chat-header">
        <div className="chat-ai-icon">
          AI
        </div>

        <div>
          <h2>City Pilot AI</h2>
          <span>Online and ready to help</span>
        </div>
      </div>

      <div className="chat-messages">

        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === "user"
                ? "message user-message"
                : "message ai-message"
            }
          >
            {message.text}
          </div>
        ))}

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Ask City Pilot AI..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;