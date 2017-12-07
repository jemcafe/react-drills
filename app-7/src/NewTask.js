import React, { Component } from 'react';

class NewTask extends Component {
  constructor () {
    super();
    this.state = {
      input: ''
    }
    this.add = this.add.bind( this )
  }

  handleInput( val ) {
    this.setState({ input: val });
  }

  handleAdd() {
    this.props.add( this.state.input );
    this.setState({ input: '' });
  }

  render () {
    return (
      <div>
          <input value={ this.state.input } nChange={ (e) => this.handleAdd(e.target.value) }/>
          <button onClick={ this.add }></button>
      </div>
    );
  }
}

export default NewTask;