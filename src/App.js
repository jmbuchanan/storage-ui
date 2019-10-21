import React from 'react';
import './style.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="container">
    <NavBar />
    <Routes />
    <Footer />
    </div>
  );
}

export default App;
