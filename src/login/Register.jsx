import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import './_styles.css';

const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [statusCode, setStatusCode] = useState('');
  const [warning, setWarning] = useState('');

  const handleEmail = (e) => {

    if (isValidEmail(e.target.value)) {
      setEmail(e.target.value);
      setWarning('');
    } else {
      setWarning("Please enter a valid e-mail address");
    }
  }

  const isValidEmail = (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }
  
  const handleLastName = (e) => {
    setLastName(e.target.value);
  }
  
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  }
  
  const handleStreetAddress2 = (e) => {
    setStreetAddress2(e.target.value);
  }
  
  const handleState = (e) => {
    setState(e.target.value);
  }
  
  const handleZip = (e) => {
    setZip(e.target.value);
  }
  
  const handleCountry = (e) => {
    setCountry(e.target.value);
  }
  

  const handleSubmit = (e) => {

    e.preventDefault();
    let formData = new URLSearchParams();

    formData.set('email', email);
    formData.set('password', password);
    formData.set('firstName', firstName);
    formData.set('lastName', lastName);
    formData.set('phoneNumber', phoneNumber);
    formData.set('streetAddress', streetAddress);
    formData.set('secondStreetAddress', streetAddress2);
    formData.set('state', state);
    formData.set('zip', zip);
    formData.set('country', country);


    axios(process.env.REACT_APP_DOMAIN + '/customers/addCustomer', {
      method: 'POST',
      data: formData
    })
    .then(response => {
      setStatusCode(response.status);
    })
    .catch(error => {
      setStatusCode(error.response.status);
    });
    document.body.style.zoom="100%";
    window.scrollTo(0,0);
  }
  

  if (statusCode === 303) {
    return <Redirect push to="/admin"/>;
  }

  if (statusCode === 409) {
    setWarning( "There is already an account with this e-mail.");
  }

  const warningMessage = (warning) => {
    return (
      <p className="warning">
        {warning}
      </p>
    );
  }

  return (
    <div className="default-body">
      <div className="register paper">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Email"
            onBlur = {handleEmail}
        />
        <input
            type="password" 
            placeholder="Password"
            onChange = {handlePassword}
        />

        <input 
            type="text" 
            placeholder="First Name"
            onBlur = {handleFirstName}
        />
        <input
            type="text" 
            placeholder="Last Name"
            onChange = {handleLastName}
        />
        <input
            type="text" 
            placeholder="Phone"
            onChange = {handlePhoneNumber}
        />
        <input 
            type="text" 
            placeholder="Street Address"
            onBlur = {handleStreetAddress}
        />
        <input
            type="text" 
            placeholder="Street Address (2)"
            onChange = {handleStreetAddress2}
        />
        <input 
            type="text" 
            placeholder="State"
            onBlur = {handleState}
        />
        <input
            type="text" 
            placeholder="Zip"
            onChange = {handleZip}
        />
        <input 
            type="text" 
            placeholder="Country"
            onBlur = {handleCountry}
        />
        <button 
            className="login-button"
            type="submit"
            value="Login"
        >
            Submit
        </button>
        </form>
        <p>Already have an account? 
          <a className="register" href="/login">Sign in</a>
        </p>
        {warning ? warningMessage(warning) : null}
      </div>
    </div>
  )
}

export default Register;
