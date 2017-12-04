import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor () {
    super();
    this.state = {
     items: ['turkey', 'ham', 'milk', 'cheese', 'oysters', 'lobster', 'quail']
    }
  }

  

  render() {
    const { items } = this.state

    return (
      <div className="App">
        <h2>{ items }</h2>
      </div>
    );
  }
}

export default App;
