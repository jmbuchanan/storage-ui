import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../context/AuthContext';

import './_styles.css';

const states = [
  'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE',
  'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY',
  'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT',
  'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK',
  'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT',
  'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'
]

const Register = () => {

  const { setUserBasedOnAuthCookie } = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(states[0]);
  const [zip, setZip] = useState('');
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
  
  const handleCity = (e) => {
    setCity(e.target.value);
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
    formData.set('city', city);
    formData.set('state', state);
    formData.set('zip', zip);

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
    setUserBasedOnAuthCookie();
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
      <h1>Register</h1>
      <div className="register paper">
        <h2>Create Account</h2>
        <p>Enter your details below to create an account.</p>
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
        <label>First Name</label>
        <input 
            type="text" 
            placeholder="First Name"
            value={firstName}
            onChange = {handleFirstName}
        />
        <label>Last Name</label>
        <input
            type="text" 
            placeholder="Last Name"
            value={lastName}
            onChange = {handleLastName}
        />
        <label>Phone Number</label>
        <input
            type="tel"
            placeholder="Phone Number"
            maxLength="10"
            value={phoneNumber}
            onChange = {handlePhoneNumber}
        />
        <small>Format: 9876543210</small>
        <label>Street Address</label>
        <input 
            type="text" 
            placeholder="Street Address"
            value={streetAddress}
            onChange = {handleStreetAddress}
        />
        <label>Street Address (2)</label>
        <input
            type="text" 
            placeholder="Street Address (2)"
            value={streetAddress2}
            onChange = {handleStreetAddress2}
        />
        <label>City</label>
        <input 
            type="text" 
            placeholder="City"
            value={city}
            onChange = {handleCity}
        />

        <label for="state">State</label>
        <select id="state" value={state} onChange={handleState}>
          {states.map((state) => (<option value={state}>{state}</option>))}
        </select>

        <label>Zip</label>
        <input
            type="text" 
            placeholder="Zip"
            value={zip}
            onChange = {handleZip}
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
