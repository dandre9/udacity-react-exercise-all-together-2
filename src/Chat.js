import React, { Component } from "react";
import ChatMessageList from "./ChatMessageList";
import ChatSendMessageInput from "./ChatSendMessageInput";

class Chat extends Component {
  render() {
    const { user, messages } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user}</div>

        <ChatMessageList messages={messages} user={user} />

        <ChatSendMessageInput />
      </div>
    );
  }
}

export default Chat;
