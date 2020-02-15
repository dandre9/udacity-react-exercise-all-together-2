import React, { Component } from "react";
import ChatMessageList from "./ChatMessageList";
import ChatSendMessageInput from "./ChatSendMessageInput";
import PropTypes from "prop-types";

class Chat extends Component {
  sendMessage = message => {
    const { spreadMessage, user, messages } = this.props;

    const messageObj = {
      username: user,
      text: message,
      key: messages.length
    };

    spreadMessage(messageObj);
  };

  render() {
    const { user, messages } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user}</div>
        <ChatMessageList messages={messages} user={user} />

        <ChatSendMessageInput sendMessage={this.sendMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  spreadMessage: PropTypes.func.isRequired
};

export default Chat;
