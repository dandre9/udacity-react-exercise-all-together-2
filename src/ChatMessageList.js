import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageList = props => {
  const { user, messages } = props;

  return (
    <ul className="message-list">
      {messages.map(message => (
        <ChatMessage key={message.key} message={message} user={user} />
      ))}
    </ul>
  );
};

export default ChatMessageList;
