import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import ProtectedResource from '../security/ProtectedResource';
import AddPaymentMethod from './AddPaymentMethod';
import UserDetails from './UserDetails';
import UserUnits from './UserUnits';

import './_styles.css';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Portal = () => {

  const [hasCardOnFile, setHasCardOnFile] = useState(false);
  const [cardsOnFile, setCardsOnFile] = useState([]);

  const getBalance = async () => {
    const api = process.env.REACT_APP_DOMAIN + '/balance/fetchByCustomerId';
  }

  const getCardsOnFile = async () => {
    const api = process.env.REACT_APP_DOMAIN + '/paymentMethods/fetchByCustomerId';
    await axios
      .get(api, { withCredentials: true })
      .then(response => {
        setCardsOnFile(response.data)
      })
      .catch(error => {
        if (error.response) {
          console.log("Error Response from Server");
        } else {
          console.log("No Response from Server");
        }
    });
  }

  useEffect(() => {
    clearStripeiFrames();
    getBalance();
    getCardsOnFile();
  }, [])

  
  //stripe can add too many iframes on rerender, so this cleans up
  const clearStripeiFrames = () => {
      var iframes = document.querySelectorAll('iframe');
      for (var i = 0; i < iframes.length; i++) {
          iframes[i].parentNode.removeChild(iframes[i]);
      }
  }

  const handleClick = () => {
    setHasCardOnFile(!hasCardOnFile);
  }

  const PaymentMethod = () => {
    if (hasCardOnFile) {
      return null //<SelectPaymentMethod onClick={handleClick} />
    } else {
      return <AddPaymentMethod onClick={handleClick} />
    }
  }

  if (process.env.REACT_APP_BILLING_ENABLED === "true") {
    return (
      <Elements stripe={stripePromise}>
        <div className="default-body">
          <h1>Portal</h1>
            <ProtectedResource>
              <UserDetails />
              <UserUnits />
              <PaymentMethod />
            </ProtectedResource>
        </div>
      </Elements>
    );
  } else {
    return (
      <div className="default-body">
        <h1>Portal</h1>
        <div className="billing paper">
          <p>Coming soon...</p>
        </div>
      </div>
    );
  }

}

export default Portal;
