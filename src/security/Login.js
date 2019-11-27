import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      responseStatus: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  
  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    let formData = new URLSearchParams();
    formData.set('email', this.state.email);
    formData.set('password', this.state.password);

    axios('https://www.jeffersonminiwarehouses.com/api/login', {
      method: 'POST',
      data: formData,
      withCredentials: true
    })
    .then(response => {
      this.setState({responseStatus: response.status});
    })
    .catch(error => {
      this.setState({responseStatus: error.response.status});
      }
    );
    }


  render() {

  let statusCode = this.state.responseStatus;
  let warning;

  if (statusCode === 200) {
    return <Redirect push to="/admin"/>;
  }

  if (statusCode === 401) {
    warning = <p className="warning">
      Incorrect password.
    </p>
  }

  if (statusCode === 403) {
    warning = <p className="warning">
      No account exists for this e-mail.
    </p>
  }

  return (
    <div className="default-body">
      <div>
        <h1>Please sign in</h1>
          <input 
            type="text" 
            placeholder="Email"
            onBlur = {this.handleEmail}
          />
          <br/>
          <input
            type="password" 
            placeholder="Password"
            onBlur = {this.handlePassword}
          />
          <br/>
          <button 
            className="login-button"
            type="submit"
            value="Login"
            onClick={this.handleSubmit}
          >
            Sign in
          </button>
          <br/>
          <p>Need an account? 
            <a className="register" href="/register">Register</a>
          </p>
          {warning != null ? warning : null}
        </div>
      </div>
    )
  }
}

export default Login;