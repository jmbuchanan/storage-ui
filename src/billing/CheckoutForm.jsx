import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement, useStripe} from '@stripe/react-stripe-js';

const fieldStyle = {
  boxShadow: '1px 1px 2px grey',
  backgroundColor: 'white',
  padding: '10px 5px',
  margin: '15px 0px'
}

const CheckoutForm = () => {

  const stripe = useStripe();

  return (
    <div className="billing paper">
      <h2>Credit Card Info</h2>
      <p>Enter your credit card information below to pay your bill online.</p>
      <form style={{width: '100%'}}>
        <label>Card Number</label>
        <div style={fieldStyle}>
          {stripe ? <CardNumberElement /> : <span>4242 4242 4242</span>}
        </div>
        <label>Expiration</label>
        <div style={fieldStyle}>
          <CardExpiryElement />
        </div>
        <label>CVC</label>
        <div style={fieldStyle}>
          <CardCvcElement />
        </div>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;