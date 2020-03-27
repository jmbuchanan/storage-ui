import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import './_styles.css';

class Register extends Component {
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
    e.preventDefault();
    let formData = new URLSearchParams();
    formData.set('email', this.state.email);
    formData.set('password', this.state.password);

    axios(process.env.REACT_APP_DOMAIN + 'customers/addCustomer', {
      method: 'POST',
      data: formData
    })
    .then(response => {
      this.setState({responseStatus: response.status})
    })
    .catch(error => {
      this.setState({responseStatus: error.response.status})
    });
    document.body.style.zoom="100%";
    window.scrollTo(0,0);
  }
  

  render() {

    let statusCode = this.state.responseStatus;
    let warning;

    if (statusCode === 303) {
      return <Redirect push to="/admin"/>;
    }

    if (statusCode === 409) {
      warning = <p className="warning">
        There is already an account with this e-mail.
      </p>
    }

    return (
      <div className="default-body">
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit}>
        <input 
            type="text" 
            placeholder="Email"
            onBlur = {this.handleEmail}
        />
        <br/>
        <input
            type="password" 
            placeholder="Password"
            onChange = {this.handlePassword}
        />
        <br/>
        <button 
            className="login-button"
            type="submit"
            value="Login"
        >
            Submit
        </button>
        </form>
        <br/>
        <p>
          <a className="register" href="/login">Already have an account?</a>
        </p>
        {warning != null ? warning : null}
      </div>
    )
  }
}

export default Register;
