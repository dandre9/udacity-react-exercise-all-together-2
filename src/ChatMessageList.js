import React from "react";
import ChatMessage from "./ChatMessage";
import PropTypes from "prop-types";

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

ChatMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired
};

export default ChatMessageList;
