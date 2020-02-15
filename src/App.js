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
    messages: [
      { username: "Amy", text: "Hi, Jon!", key: 0 },
      { username: "Amy", text: "How are you?", key: 1 },
      { username: "John", text: "Hi, Amy! Good, you?", key: 2 }
    ]
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
            <Chat user={user.username} messages={messages} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
