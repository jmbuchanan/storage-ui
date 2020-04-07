import React, { useState } from 'react';
import axios from 'axios';

import './_styles.css';

const LoginForm = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      props.onSubmit(response.status);

    })
    .catch(error => {
      props.onSubmit(error.response.status);

      }
    );

    document.body.style.zoom="100%";
    window.scrollTo(0,0);
  }

  let warning;

  if (props.statusCode === 404 || props.statusCode === 401) {
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
          value={email}
          onChange = {handleEmail}
        />
        <br/>
        <input
          type="password" 
          placeholder="Password"
          value={password}
          onChange = {handlePassword}
        />
        <br/>
        <button 
          className="login-button"
          type="submit"
          value="Login"
          onSubmit={handleSubmit}
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