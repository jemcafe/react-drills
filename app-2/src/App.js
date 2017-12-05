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

  render () {
    const { items } = this.state
    
    let list = items.map( (e, i) => {
      return (<h2 key={i}> {e} </h2>);
    })

    return (
      <div className="App">
        { list }
      </div>
    );
  }
}

export default App;
