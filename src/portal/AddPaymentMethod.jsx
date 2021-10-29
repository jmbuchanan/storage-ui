import React, { useContext, useState } from 'react';
import { CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements } from '@stripe/react-stripe-js';

import { AuthContext } from '../context/AuthContext';

import loading from '../img/loading.gif';

const AddPaymentMethod = (props) => {

  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ statusMessage, setStatusMessage ] = useState('');
  const { customerId, stripeCustomerId } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stripeResponse = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement('cardNumber'),
      billing_details: {
        customer_id: stripeCustomerId,
      },
    });

    setIsSubmitted(true);

    forwardStripeResponseToServer(stripeResponse);

  }

  const forwardStripeResponseToServer = async (stripeResponse) => {
    if (stripeResponse.error) {
      setStatusMessage("Error submitting details to Stripe server...");

    } else {
      const serverResponse = await fetch(process.env.REACT_APP_DOMAIN + '/paymentMethods', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          stripeId: stripeResponse.paymentMethod.id,
          cardBrand: stripeResponse.paymentMethod.card.brand,
          lastFour: stripeResponse.paymentMethod.card.last4,
          customerId: customerId
        }),
      });

    const serverResponseJson = await serverResponse.json();

    handleServerResponse(serverResponseJson);
    }
  }

  const handleServerResponse = async (serverResponse) => {
    if (serverResponse.error) {
      setStatusMessage("Error occurred on the server.");
    } else {
      props.onSubmit();
    }
  }

  const PaymentDetailsForm = () => {
    return (
      <>
        <p>
          Enter your credit card information below to add a payment method.
        </p>
        <form style={{width: '100%'}} onSubmit={handleSubmit}>
          <label>Card Number</label>
          <div className="stripe-input">
            {stripe ? <CardNumberElement /> : <span>1234 1234 1234</span>}
          </div>
          <label>Expiration</label>
          <div className="stripe-input">
            {stripe ? <CardExpiryElement /> : <span>MM / YY</span>}
          </div>
          <label>CVC</label>
          <div className="stripe-input">
            {stripe ? <CardCvcElement /> : <span>CVC</span>}
          </div>
          <button type="submit">
            Add Payment Method
          </button>
        </form>
        </>
    );
  }


  if (isSubmitted) {
    return <img src={loading} alt="loading" className="loading" />
  } else {
    return <PaymentDetailsForm />
  }

};

export default AddPaymentMethod;