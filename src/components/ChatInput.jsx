
import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (input.trim() === "") {
      setError("Please enter a message before sending.");
      return;
    }

    onSend(input);
    setInput("");
    setError("");
  }

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Ask about your workouts or nutrition..."
      />

      <button type="submit">Send</button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default ChatInput;
