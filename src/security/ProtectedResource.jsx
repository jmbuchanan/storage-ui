import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './_styles.css';

import LoginForm from '../security/LoginForm';
import { AuthContext } from '../context/AuthContext';


const ProtectedResource = (Component) => {

  const [authenticateStatusCode, setAuthenticateStatusCode] = useState('');
  const [loginStatusCode, setLoginStatusCode] = useState('');

  const { checkLogin, firstName } = useContext(AuthContext);

  const fetchData = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/authenticate";
    await axios
      .get( api, {withCredentials: true})
      .then(response => {
        setAuthenticateStatusCode(response.status)})
      .catch(error => {
        if (error.response) {
          setAuthenticateStatusCode(error.response.status)
        } else {
          setAuthenticateStatusCode(500);
        }
      });
  }

  useEffect(() => {
    fetchData();
    checkLogin();
  }, []);

  const handleStatusCode = (statusCode) => {
    checkLogin();
    setLoginStatusCode(statusCode);
  }


  const renderBody = (authenticateStatusCode, loginStatusCode, Component) => {
    console.log("Authentication Status Code: " + authenticateStatusCode)
    console.log("Login Status Code: " + loginStatusCode)
    console.log("First Name: " + firstName)
    if (!authenticateStatusCode) {
      return null;
    } else if (authenticateStatusCode === 500) {
      return (
        <div className="default-body">
          <p>Something went wrong...this is likely a server issue.</p>
        </div>
      );
    } else if (!firstName || authenticateStatusCode !== 200 && loginStatusCode !== 200) {
      return (
          <LoginForm onSubmit={handleStatusCode} statusCode={loginStatusCode}/>
      );

    } else {
      return <Component />;
    }
  }

  return renderBody(authenticateStatusCode, loginStatusCode, Component);

}

export default ProtectedResource;