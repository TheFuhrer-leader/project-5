
import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message
          key={message.id}
          text={message.text}
          sender={message.sender}
        />
      ))}
    </div>
  );
}

export default MessageList;
