import React from 'react';
import './style.css';

import Header from './common/Header';
import Footer from './common/Footer';
import Routes from './common/Routes';

function App() {
  return (
    <div className="container">
    <Header />
    <Routes />
    <Footer />
    </div>
  );
}

export default App;
