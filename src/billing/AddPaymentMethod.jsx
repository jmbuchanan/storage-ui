import React, { useContext, useState } from 'react';
import { CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements } from '@stripe/react-stripe-js';

import { AuthContext } from '../context/AuthContext';

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
      const serverResponse = await fetch(process.env.REACT_APP_DOMAIN + '/paymentMethods/addPaymentMethod', {
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
      setStatusMessage("Payment successfully added!");
      await new Promise(r => setTimeout(r, 1200));
      props.onClick();
    }
  }

  const PaymentDetailsForm = () => {
    return (
    <div className="billing paper">
      <h2>Add A Payment Method</h2>
      <p>
        We do not currently have a payment method on file for your account.
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
        <span onClick={props.onClick} className="anchor">View outstanding balance</span>
      </form>
      </div>
    );
  }

  const StatusMessage = () => {
    return (
      <div className="billing paper">
        <p>{statusMessage}</p>
      </div>
    );
  }

  if (isSubmitted) {
    return <StatusMessage />
  } else {
    return <PaymentDetailsForm />
  }

};

export default AddPaymentMethod;