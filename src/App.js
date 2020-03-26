import React from 'react';
import './_styles.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './layout/Routes';

const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;