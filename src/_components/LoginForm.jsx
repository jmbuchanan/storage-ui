import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import './_styles.css';

const LoginForm = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusCode, setStatusCode] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new URLSearchParams();
    formData.set('email', email);
    formData.set('password', password);

    axios(process.env.REACT_APP_DOMAIN + '/login', {
      method: 'POST',
      data: formData,
      withCredentials: true
    })
    .then(response => {
      setStatusCode(response.status);
    })
    .catch(error => {
      setStatusCode(error.response.status);
      }
    );

    document.body.style.zoom="100%";
    window.scrollTo(0,0);
  }


  let warning;

  if (statusCode === 200) {
    return <Redirect push to={props.redirect}/>;
  }

  if (statusCode === 404 || statusCode === 401) {
    warning = <p className="warning">
      The e-mail or password you entered was incorrect.
    </p>
  }

  return (
    <div className="login-form paper">
      <h2>Sign In</h2>
      <p>
        Login with your email address and password 
        to access your account.
      </p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Email"
          onBlur = {handleEmail}
        />
        <br/>
        <input
          type="password" 
          placeholder="Password"
          onChange = {handlePassword}
        />
        <br/>
        <button 
          className="login-button"
          type="submit"
          value="Login"
        >
          Sign in
        </button>
      </form>
      <br/>
      <p>Need an account? 
        <a className="register" href="/register">Register</a>
      </p>
      {warning != null ? warning : null}
    </div>
  )
}

export default LoginForm;