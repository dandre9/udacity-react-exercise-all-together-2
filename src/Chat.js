import React, { Component } from "react";
import ChatMessageList from "./ChatMessageList";
import ChatSendMessageInput from "./ChatSendMessageInput";

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

export default Chat;
