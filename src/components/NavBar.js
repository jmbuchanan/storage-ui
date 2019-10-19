import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../img/logo.svg';

import Home from '../routes/Home';
import Units from '../routes/Units';
import Billing from '../routes/Billing';
import Contact from '../routes/Contact';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {isToggled: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return {isToggled: !prevState.isToggled};
    });
  }

  renderNonToggledNavBar() {
    return (
      <>
      <Router>
      <nav>
        <div className="logo-and-menu-button">
          <Link className="logo" to="/"><img src={logo} alt="Logo for Jefferson Mini Warehouses" /></Link>
          <Link className="menu-button" onClick={this.handleClick}>&#9776;</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/units">Units</Link></li>
          <li><Link to="/billing">Pay Bill</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
        <Route exact path="/" component={Home} />
        <Route path = "/units" component={Units} />
        <Route path = "/billing" component={Billing} />
        <Route path = "/contact" component={Contact} />
      </Router>
      </>
    )
  }

  renderToggledNavBar() {
    return (
      <>
      <Router>
      <nav>
        <div className="logo-and-menu-button">
          <Link className="logo" to="/"><img src={logo} alt="Logo for Jefferson Mini Warehouses" /></Link>
          <Link className="menu-button" onClick={this.handleClick}>&#9776;</Link>
        </div>
        <ul className="nav-links toggle-nav-links">
          <li><Link to="/units">Units</Link></li>
          <li><Link to="/billing">Pay Bill</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>		
        <Route exact path="/" component={Home} />
        <Route path = "/units" component={Units} />
        <Route path = "/billing" component={Billing} />
        <Route path = "/contact" component={Contact} />
      </Router>
      </>
    )
  }

  renderNav() {
    var x;
    if (this.state.isToggled) {
      x = this.renderToggledNavBar();
    }
    else {
      x = this.renderNonToggledNavBar();
    }
    return x;
  }

  render() {
    return (
      <>
      {this.renderNav()}
      </>
    );
  }
}
export default NavBar;
