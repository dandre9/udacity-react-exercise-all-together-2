import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./Chat";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Amy" }, { username: "John" }];

class App extends Component {
  state = {
    messages: []
  };

  spreadMessage = message => {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <Chat
              key={user.username}
              user={user.username}
              messages={messages}
              spreadMessage={this.spreadMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
