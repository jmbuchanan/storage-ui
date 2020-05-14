import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import './_styles.css';

import Header from './layout/Header';
import Greeting from './layout/Greeting';
import Footer from './layout/Footer';
import Routes from './layout/Routes';
import AuthContextProvider from './context/AuthContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <AuthContextProvider>
        <Header />
        <Greeting />
        <Routes />
        <Footer />
      </AuthContextProvider>
    </Elements>
  );
}

export default App;