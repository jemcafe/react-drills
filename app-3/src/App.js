import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
     items: ['turkey', 'ham', 'milk', 'cheese', 'oysters', 'lobster', 'quail', 'sausage', 'apple', 'chicken', 'lettuce'],
     userInput: '',
     itemsFound: [],
    }
  }

  handleChange ( val ) {
    this.setState({ userInput: val })
    console.log(val)
  }

  render() {
    const { items, userInput, itemsFound } = this.state

    // includes
    let itemsSearch = items.filter( (e) => e.slice(0,userInput.length) === userInput.includes(userInput) )
                           .map( (e, i) => (<h2 key={i}> {e} </h2>) );

    return (
      <div className="App">
        <input className="searchBox" onChange={ (e) => {this.handleChange(e.target.value); this.findItem(items, userInput);} }/>
        <p>{ userInput }</p>
        { itemsSearch  }
      </div>
    );
  }
}

export default App;
