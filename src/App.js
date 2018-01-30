import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TotoForm"
import TodoList from "./components/TodoList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
            <div className="Todo-List">
              <TodoForm />
              <TodoList todos={this.props.todos} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
