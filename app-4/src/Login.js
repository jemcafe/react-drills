import React, { Component } from 'react';

class Login extends Component {
    constructor () {
      super();
      this.state = {
        usernameInput: '',
        passwordInput: '',
      }
    }
  
    handleChange ( property, value ) {
      console.log(value)
      this.setState({ [property]: value })
    }

    alertUser () {
      alert( `Username: ${this.state.usernameInput} Password: ${this.state.passwordInput}` )
    }
  
    render() {
      const { usernameInput, passwordInput } = this.state;
  
      return (
        <div className="App">
          <input className="username-box" onChange={ (e) => this.handleChange('usernameInput', e.target.value) }/>
          <input className="password-box" onChange={ (e) => this.handleChange('passwordInput', e.target.value) }/>
          <button className="login-button" onClick={ (e) => { this.alertUser() } }>Login</button>
        </div>
      );
    }
  }
  
  export default Login;