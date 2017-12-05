import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
     items: ['lima bean', 'lemon', 'lentils', 'cheese', 'steak', 'lobster', 'sugar', 'sausage', 'apple', 'chicken', 'lettuce', 'liver'],
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

    // .includes - A string to be searched for within this string
    let itemsSearch = items.filter( (e) => e.includes(userInput) )
    itemsSearch = itemsSearch.map( (e, i) => (<h2 key={i}> {e} </h2>) );
    console.log( itemsSearch )

    return (
      <div className="App">
        <input className="searchBox" onChange={ (e) => {this.handleChange(e.target.value)} }/>
        <p>{ userInput }</p>
        { itemsSearch  }
      </div>
    );
  }
}

export default App;
