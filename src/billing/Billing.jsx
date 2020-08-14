import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import ProtectedResource from '../security/ProtectedResource';
import AddPaymentMethod from './AddPaymentMethod';
import Balance from './Balance';

import './_styles.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Billing = () => {

  const [pay, setPay] = useState(false);

  useEffect(() => {
    return () => {
      clearStripeiFrames();
    }
  }, [])

  const clearStripeiFrames = () => {
      var iframes = document.querySelectorAll('iframe');
      for (var i = 0; i < iframes.length; i++) {
          iframes[i].parentNode.removeChild(iframes[i]);
      }
  }

  const handleClick = () => {
    setPay(!pay);
  }

  const BillingBody = () => {
    return pay ? <AddPaymentMethod onClick={handleClick} /> : <Balance balance={20.00} onClick={handleClick}/>;
  }

  if (process.env.REACT_APP_BILLING_ENABLED === "true") {
    return (
      <Elements stripe={stripePromise}>
        <div className="default-body">
          <h1>Pay Bill</h1>
            <ProtectedResource>
              <BillingBody />
            </ProtectedResource>
        </div>
      </Elements>
    );
  } else {
    return (
      <div className="default-body">
        <h1>Pay Bill</h1>
        <div className="billing paper">
          <p>Coming soon...</p>
        </div>
      </div>
    );
  }

}

export default Billing;
