import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement, useStripe} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {

  const stripe = useStripe();

  return (
    <div className="billing paper">
      <h2>Credit Card Info</h2>
      <p>Enter your credit card information below to pay your bill online.</p>
      <form style={{width: '100%'}}>
        <label>Card Number</label>
        <div className="stripe-input">
          {stripe ? <CardNumberElement /> : <span>4242 4242 4242</span>}
        </div>
        <label>Expiration</label>
        <div className="stripe-input">
          <CardExpiryElement />
        </div>
        <label>CVC</label>
        <div className="stripe-input">
          <CardCvcElement />
        </div>
        <button>
          Submit
        </button>
        <p>
          <a onClick={props.onClick}>View outstanding balance</a>
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;