import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInput: '',
      list: [],
    }
  }

  handleChange ( val ) {
    this.setState({ userInput: val });
  }

  addTask ( arr, userInput ) {
    let newArr = arr;
    newArr.push(userInput);
    this.setState({ userInput: '' , list: newArr});
  }

  render() {

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input className="text-box" onChange={(e) => { this.handleChange(e.target.value) }}/>
        <button onClick={() => { this.addTask(this.state.list, this.state.userInput) }}>Add</button>
        <Todo tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
