import React from 'react';

import './_styles.css';

import LoginForm from '../_components/LoginForm';

const Login = () => {
  return (
    <div className="default-body">
      <LoginForm redirect="/admin"/>
    </div>
  )
}

export default Login;