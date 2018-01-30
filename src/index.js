import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  todos: [
    {id: 1, name: "Learn React", isComplete: true},
    {id: 2, name: "Learn Redux", isComplete: false},
    {id: 3, name: "Profit", isComplete: false}
  ]
};

ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
