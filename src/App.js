import React, { Component } from 'react';
import './App.css';
import TodoDashboard from './components/TodoDashboard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>React-Redux-Thunk demo</h1>
        <TodoDashboard />
      </div>)
  }
}
export default App
