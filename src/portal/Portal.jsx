import React, { useState, useContext, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import ProtectedResource from '../security/ProtectedResource';
import YourPaymentMethods from './YourPaymentMethods';
import YourUnits from './YourUnits';

import { AuthContext } from '../context/AuthContext';

import './_styles.css';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Portal = (props) => {

  const { firstName } = useContext(AuthContext);

  const [units, setUnits] = useState([]);
  const [cardsOnFile, setCardsOnFile] = useState([]);

  //stripe can add too many iframes on rerender, so this cleans up
  const clearStripeiFrames = () => {
      var iframes = document.querySelectorAll('iframe');
      for (var i = 0; i < iframes.length; i++) {
          iframes[i].parentNode.removeChild(iframes[i]);
      }
  }

  const fetchUnits = async () => {
    if (firstName != '') {
      const api = process.env.REACT_APP_DOMAIN + '/units/fetchByCustomerId';
      await axios
        .get(api, { withCredentials: true })
        .then(response => {
          setUnits(response.data)
        })
        .catch(error => {
          if (error.response) {
            console.log("Error Response from Server");
          } else {
            console.log("No Response from Server");
          }
      });
    }
  }

  const fetchCardsOnFile = async () => {
    if (firstName != '') {
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
  }
  
  useEffect(() => {
    clearStripeiFrames();
    //fetchUnits();
    fetchCardsOnFile();
  }, [firstName])

  if (process.env.REACT_APP_BILLING_ENABLED === "true") {
    return (
      <Elements stripe={stripePromise}>
        <div className="default-body">
          <h1>Portal</h1>
            <ProtectedResource>
              <YourUnits units={units}/>
              <YourPaymentMethods cardsOnFile={cardsOnFile}/>
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
