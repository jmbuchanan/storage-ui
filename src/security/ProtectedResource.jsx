import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './_styles.css';

import LoginForm from '../security/LoginForm';
import { AuthContext } from '../context/AuthContext';


const ProtectedResource = (props) => {

  const [authenticateStatusCode, setAuthenticateStatusCode] = useState('');
  const [loginStatusCode, setLoginStatusCode] = useState('');

  const { setUserBasedOnAuthCookie, firstName, isAdmin } = useContext(AuthContext);

  const fetchAuthenticationStatus = async () => {
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
    fetchAuthenticationStatus();
    setUserBasedOnAuthCookie();
  }, []);

  const handleStatusCode = (statusCode) => {
    setUserBasedOnAuthCookie();
    setLoginStatusCode(statusCode);
  }
  

  if (authenticateStatusCode === 500) {
    return (
      <div className="default-body">
        <p>Something went wrong...this is likely a server issue.</p>
      </div>
    );

  } else if (firstName == '') {
    return <LoginForm onSubmit={handleStatusCode} statusCode={loginStatusCode}/>;

  } else if (props.isAdminRequired && !isAdmin){
    return (
      <div className="default-body">
        <p>You need admin rights to access this resource. Contact your administrator.</p>
      </div>
    );

  } else {
      return props.children;
  }
}

export default ProtectedResource;