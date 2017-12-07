import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.addTask = this.addTask.bind(this)
  }

  handleInput ( val ) {
    // sets input to the users input
    this.setState({ input: val })
  }

  addTask ( val ) {
    //adds task to the list
    this.setState({
      list: [...this.state.list, val],
      input: ''
    });
  }

  render() {
    const { userInput } = this.state;

    return (
      <div className="App">
        <h4 className="title">My Todo List:</h4>
        <input className="text-box" onChange={(e) => this.handleChange(e.target.value)}/>
      </div>
    );
  }
}

export default App;
