import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './_styles.css';

import LoginForm from '../security/LoginForm';

const ProtectedResource = (Component) => {

  const [authenticateStatusCode, setAuthenticateStatusCode] = useState('');
  const [loginStatusCode, setLoginStatusCode] = useState('');

  const fetchData = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/authenticate";
    const response = await axios
      .get( api, {withCredentials: true})
      .then(response => {
        setAuthenticateStatusCode(response.status)})
      .catch(error => {
        setAuthenticateStatusCode(error.response.status)
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusCode = (statusCode) => {
    setLoginStatusCode(statusCode);
  }

  const renderBody = (authenticateStatusCode, loginStatusCode, props) => {
    if (!authenticateStatusCode) {
      return null;

    } else if (authenticateStatusCode !== 200 && loginStatusCode !== 200) {
      return (
        <div className="default-body">
          <LoginForm onSubmit={handleStatusCode} statusCode={loginStatusCode}/>
        </div>
      );

    } else {
      return <Component {...props}/>;
    }
  }

  const WrappedComponent = (props) => {
      return renderBody(authenticateStatusCode, loginStatusCode, props);
  }

  return WrappedComponent;
}

export default ProtectedResource;