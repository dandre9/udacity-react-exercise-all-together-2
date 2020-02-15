import React, { Component } from "react";

class ChatSendMessageInput extends Component {
  state = {
    message: ""
  };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return !this.state.message;
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <form className="input-group">
          <input
            value={message}
            type="text"
            className="form-control"
            placeholder="Enter your message..."
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatSendMessageInput;
