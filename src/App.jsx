import React from 'react';

import './_styles.css';

import Header from './layout/Header';
import Greeting from './layout/Greeting';
import Footer from './layout/Footer';
import Routes from './layout/Routes';
import AuthContextProvider from './context/AuthContext';


const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <Greeting />
      <Routes />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;