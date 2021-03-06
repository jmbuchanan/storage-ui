import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    axios(process.env.REACT_APP_DOMAIN + '/login', {
      method: 'POST',
      data: {
        email: email,
        password: password
      },
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
        <label>Email</label>
        <input 
          type="text" 
          placeholder="Email"
          value={email}
          onChange = {handleEmail}
        />
        <label>Password</label>
        <input
          type="password" 
          placeholder="Password"
          value={password}
          onChange = {handlePassword}
        />
        <button 
          className="login-button"
          type="submit"
          value="Login"
          onSubmit={handleSubmit}
        >
          Sign in
        </button>
      </form>
      <p>Need an account? 
        <Link className="register" to="/register">Register</Link>
      </p>
      {warning != null ? warning : null}
    </div>
  )
}

export default LoginForm;