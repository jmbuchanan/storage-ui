import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {isToggled: false};

    this.toggle = this.toggle.bind(this);
    this.removeToggle = this.removeToggle.bind(this);
  }

  toggle() {
    this.setState(state => (
      {isToggled: !state.isToggled}
    ));
  }

  removeToggle() {
    if (this.state.isToggled) {
      this.setState(state => (
        {isToggled: false}
      ));
    }
  }

  render() {

    const toggled = !this.state.isToggled ? "nav-links" : "nav-links toggle-nav-links";
    
    return (
      <>
      <header>
        <nav>
          <div className="logo-and-menu-button">
            <div className="menu-button" onClick={this.toggle}>&#8801;</div>
            <Link className="logo" onClick={this.removeToggle} to="/">
              <img src={logo} alt="Logo for Jefferson Mini Warehouses" />
            </Link>
          </div>
          <ul className={toggled}>
            <li><Link onClick={this.removeToggle} to="/units">Units</Link></li>
            <li><Link onClick={this.removeToggle} to="/billing">Pay Bill</Link></li>
            <li><Link onClick={this.removeToggle} to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      </>
      );
    }
  }

export default Header;
