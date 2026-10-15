
import MessageList from "./MessageList";

function ChatWindow({ messages }) {
  return (
    <section className="chat-window">
      {messages.length === 0 ? (
        <div className="chat-welcome">
          <h3>Welcome to Fitness Chat!</h3>
          <p>
            Ask me about your workouts, nutrition, muscle growth,
            or staying consistent with your fitness goals.
          </p>
        </div>
      ) : (
        <MessageList messages={messages} />
      )}
    </section>
  );
}

export default ChatWindow;
