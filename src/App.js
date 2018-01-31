import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TotoForm';
import TodoList from './components/TodoList';
import {updateCurrent} from "./reducers/todo";
import {bindActionCreators} from 'redux';

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
            <p>{this.props.currentTodo}</p>
            <TodoForm
              changeCurrent={this.props.updateCurrent}
              currentTodo={this.props.currentTodo} />
            <TodoList todos={this.props.todos} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch);
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp