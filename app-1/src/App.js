import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInput: '',
    }
  }

  handleChange ( val ) {
    this.setState({ userInput: val })
  }

  render() {
    // The State is destructured
    const { userInput } = this.state

    return (
      <div className="App">
        <input className="searchBox" onChange={ (e) => this.handleChange(e.target.value) }/>
        <p className="inputText">{ userInput }</p>
      </div>
    );
  }
}

export default App;
