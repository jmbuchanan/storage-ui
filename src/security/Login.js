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
    e.preventDefault();
    let formData = new URLSearchParams();
    formData.set('email', this.state.email);
    formData.set('password', this.state.password);

    axios(process.env.REACT_APP_DOMAIN + 'login', {
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

    document.body.style.zoom="100%";
    window.scrollTo(0,0);
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
    <div></div>
    )
  }
}

export default Login;