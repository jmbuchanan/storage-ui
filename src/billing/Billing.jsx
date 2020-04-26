import React from 'react';

import CheckoutForm from './CheckoutForm';

import './_styles.css';
import ProtectedResource from '../security/ProtectedResource';

const BillingBody = () => {
  return (
    <CheckoutForm />
  );
}

const Billing = () => {

  const Component = ProtectedResource(BillingBody);

  if (process.env.REACT_APP_BILLING_ENABLED === "true") {
    return (
      <div className="default-body">
        <h1>Pay Bill</h1>
        <Component />
      </div>
    );
  } else {
    return (
      <div className="default-body">
        <h1>Pay Bill</h1>
        <p>Coming soon...</p>
      </div>
    );
  }

}

export default Billing;