import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
import logo from './img/logo.svg';

import Home from './routes/Home';
import Units from './routes/Units';
import Billing from './routes/Billing';
import Contact from './routes/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
    <Router>
    <header>
    </header>
      <nav>
        <ul className="links">
          <li className="logo">
            <Link to="/"><object data={logo}></object></Link>
          </li>
          <li><Link className="nav-link" to="/units">Units</Link></li>
          <li><Link className="nav-link" to="/billing">Pay Bill</Link></li>
          <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>
      </nav>		
      <Route exact path="/" component={Home} />
      <Route path = "/units" component={Units} />
      <Route path = "/billing" component={Billing} />
      <Route path = "/contact" component={Contact} />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
