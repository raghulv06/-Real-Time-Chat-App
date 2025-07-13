import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch existing messages
    axios.get("http://localhost:5000/messages").then(res => setMessages(res.data));
    // Listen for new messages
    socket.on("chat message", (msg) => setMessages((msgs) => [...msgs, msg]));
    return () => socket.off("chat message");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (user && text) {
      socket.emit("chat message", { user, text });
      setText("");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Real-Time Chat</h2>
      <input
        placeholder="Your name"
        value={user}
        onChange={e => setUser(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <div style={{ border: "1px solid #ccc", height: 300, overflowY: "auto", marginBottom: 10, padding: 10 }}>
        {messages.map((msg, i) => (
          <div key={i}><b>{msg.user}:</b> {msg.text}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend}>
        <input
          placeholder="Type a message..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ width: "80%" }}
        />
        <button type="submit" style={{ width: "18%" }}>Send</button>
      </form>
    </div>
  );
}

export default App;
