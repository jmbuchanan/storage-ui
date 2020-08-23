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
    // eslint-disable-next-line
  }, []);

  const handleStatusCode = (statusCode) => {
    setUserBasedOnAuthCookie();
    setLoginStatusCode(statusCode);
  }

  const checkingAuthentication = !authenticateStatusCode;
  const isServerError = authenticateStatusCode === 500; 
  const notLoggedIn = firstName === '';
  const adminProtected = props.isAdminRequired;
  const userIsNotAdmin = !isAdmin;
  const protectedResource = props.children;

  switch (true) {
    case checkingAuthentication:
      return null;

    case isServerError:
      return <p>Something went wrong...this is likely a server issue.</p>;

    case notLoggedIn:
      return <LoginForm onSubmit={handleStatusCode} statusCode={loginStatusCode}/>;

    case adminProtected && userIsNotAdmin:
      return (
        <div className="paper">
          <p>You need admin rights to access this resource. Contact your administrator.</p>
        </div>
      );

    default:
      return protectedResource;
  }
}

export default ProtectedResource;