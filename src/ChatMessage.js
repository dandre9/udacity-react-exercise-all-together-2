import React from "react";

const ChatMessage = props => {
  const { user, message } = props;

  return (
    <li
      className={
        message.username === user ? "message sender" : "message recipient"
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
};

export default ChatMessage;
