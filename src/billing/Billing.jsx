import React, { useState } from 'react';

import CheckoutForm from './CheckoutForm';
import Balance from './Balance';

import './_styles.css';
import ProtectedResource from '../security/ProtectedResource';

const Billing = () => {

  const [pay, setPay] = useState(false);

  const handleClick = () => {
    setPay(!pay);
  }

  const BillingBody = () => {
    return pay ? <CheckoutForm onClick={handleClick} /> : <Balance balance={20.00} onClick={handleClick}/>;
  }

  const ProtectedBillingBody = () => {
    return ProtectedResource(BillingBody);
  }

  if (process.env.REACT_APP_BILLING_ENABLED === "true") {
    return (
      <div className="default-body">
        <h1>Pay Bill</h1>
        <ProtectedBillingBody />
      </div>
    );
  } else {
    return (
      <div className="default-body">
        <h1>Pay Bill</h1>
        <div className="default-body">
          <p>Coming soon...</p>
        </div>
      </div>
    );
  }

}

export default Billing;