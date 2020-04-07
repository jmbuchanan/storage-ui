import React, { useState } from 'react';
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
      setEmail(e.target.value);
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

    if (!isValidEmail(email)) {
      setWarning("Please enter a valid e-mail address");
      return;
    }

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
      data: formData,
      withCredentials: true
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
  

  if (statusCode === 200) {
    window.history.back();
  }

  if (statusCode === 409) {
    setWarning( "There is already an account with this e-mail.");
    setStatusCode('');
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
            value={email}
            onChange = {handleEmail}
        />
        <input
            type="password" 
            placeholder="Password"
            value={password}
            onChange = {handlePassword}
        />

        <input 
            type="text" 
            placeholder="First Name"
            value={firstName}
            onChange = {handleFirstName}
        />
        <input
            type="text" 
            placeholder="Last Name"
            value={lastName}
            onChange = {handleLastName}
        />
        <input
            type="text" 
            placeholder="Phone"
            value={phoneNumber}
            onChange = {handlePhoneNumber}
        />
        <input 
            type="text" 
            placeholder="Street Address"
            value={streetAddress}
            onChange = {handleStreetAddress}
        />
        <input
            type="text" 
            placeholder="Street Address (2)"
            value={streetAddress2}
            onChange = {handleStreetAddress2}
        />
        <input 
            type="text" 
            placeholder="State"
            value={state}
            onChange = {handleState}
        />
        <input
            type="text" 
            placeholder="Zip"
            value={zip}
            onChange = {handleZip}
        />
        <input 
            type="text" 
            placeholder="Country"
            value={country}
            onChange = {handleCountry}
        />
        <button 
            className="login-button"
            type="submit"
            value="Login"
            onClick={handleSubmit}
        >
            Submit
        </button>
        </form>
        <p>Already have an account? 
          <a className="register"  href="/billing" onClick={() => window.history.back()}>Sign in</a>
        </p>
        {warning ? warningMessage(warning) : null}
      </div>
    </div>
  )
  }

export default Register;
