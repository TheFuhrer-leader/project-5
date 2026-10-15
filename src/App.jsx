
import { useState } from "react";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  function handleSend(text) {
    
const userMessage = {
  id: crypto.randomUUID(),
  text: text,
  sender: "user",
};

const botMessage = {
  id: crypto.randomUUID(),
  text: getBotResponse(text),
  sender: "bot",
};


    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      botMessage,
    ]);
  }

  function getBotResponse(text) {
    const message = text.toLowerCase();

    if (message.includes("workout") || message.includes("exercise")) {
      return "Consistency matters more than one perfect workout. Focus on good form, progressive overload, and recovery.";
    }

    if (message.includes("protein") || message.includes("nutrition")) {
      return "Protein supports muscle repair and growth. Build your meals around protein-rich foods and eat enough to support your training.";
    }

    if (message.includes("motivation") || message.includes("discipline")) {
      return "You won't feel motivated every day. Build habits you can stick to, even when progress feels slow.";
    }

    if (message.includes("muscle") || message.includes("grow")) {
      return "Muscle growth takes time. Train consistently, challenge your muscles progressively, eat enough, and prioritize sleep.";
    }

    if (message.includes("hello") || message.includes("hi")) {
      return "Hey! How is your fitness journey going today?";
    }

    return "I'm here to help with your fitness journey! Ask me about workouts, nutrition, muscle growth, or staying consistent.";
  }

  return (
    <div className="app">
      <Header />

      <main>
        <h2>Fitness Chat</h2>
        <p>Ask questions about workouts, nutrition, and progress.</p>

        <ChatWindow messages={messages} />

        <ChatInput onSend={handleSend} />
      </main>
    </div>
  );
}

export default App;
