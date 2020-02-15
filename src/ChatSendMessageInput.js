import React, { Component } from "react";
import PropTypes from "prop-types";

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

  handleInputChange = event => {
    this.setState({ message: event.target.value });
  };

  submitMessage = event => {
    event.preventDefault();

    const { sendMessage } = this.props;
    const { message } = this.state;

    sendMessage(message);

    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <form className="input-group" onSubmit={this.submitMessage}>
          <input
            onChange={this.handleInputChange}
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

ChatSendMessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default ChatSendMessageInput;
