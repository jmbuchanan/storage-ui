import React from 'react';
import './styles.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './layout/Routes';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
