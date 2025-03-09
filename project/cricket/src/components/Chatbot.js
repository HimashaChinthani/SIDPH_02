import React, { useState } from "react";
import "../Chatbox.css";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { text: input, sender: "user" }]);
    // Call the backend for the bot response
    // For example, axios.post("/api/chat", { message: input })
    setInput(""); // Reset input
  };

  return (
    <div>
      <div>
        {messages.map((message, idx) => (
          <div key={idx}>{message.text}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
