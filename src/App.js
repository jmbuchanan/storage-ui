import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import './_styles.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './layout/Routes';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <Header />
      <Routes />
      <Footer />
    </Elements>
  );
}

export default App;