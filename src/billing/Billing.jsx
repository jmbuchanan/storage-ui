import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LoginForm from '../_components/LoginForm';

import './_styles.css';

const BillingBody = () => {
  return (
    <div className="billing paper">
      <p>Coming soon...</p>
    </div>
  );
}

const Billing = () => {

  const [signedIn, setSignedIn] = useState(null);

  const fetchData = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/authenticate";
    const response = await axios.get(
      api, {withCredentials: true}
    );
    console.log(response.status);
    setSignedIn(response.status);
  }

  const renderSignedIn = (signedIn) => {
    if (signedIn === null) { return "null";}
    if (signedIn) { return "true";}
    if (!signedIn) { return "false";}

  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    renderSignedIn(signedIn);
  })

  return (
    <div className="default-body">      
      <h1>Pay Bill</h1>
      <p>{renderSignedIn(signedIn)}</p>
      {/*signedIn ? <BillingBody /> : <LoginForm redirect="/billing"/>*/}
    </div>
  );
}

export default Billing;