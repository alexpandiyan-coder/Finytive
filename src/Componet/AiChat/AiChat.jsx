import React, { useState } from 'react';

import "./AiChat.css"

const AIChat= () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const getBotReply = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('hello')) return "Hey there! 😊";
    if (msg.includes('how are you')) return "I'm glowing and working perfectly!";
    if (msg.includes('bye')) return "Goodbye! Have a great day!";
    return "✨ I'm still learning. Try something else!";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const botMessage = { sender: 'bot', text: getBotReply(input) };
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <>
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="glass-chat-box">
          <div className="glass-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`msg ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="glass-input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
