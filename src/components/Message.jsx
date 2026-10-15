
function Message({ text, sender }) {
  return (
    <div className={`message ${sender}`}>
      <strong>{sender === "user" ? "You" : "Fitness Coach"}:</strong>
      <p>{text}</p>
    </div>
  );
}

export default Message;
