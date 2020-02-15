import React from "react";
import PropTypes from "prop-types";

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

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired
};

export default ChatMessage;
