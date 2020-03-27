import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

import './_styles.css';

const Header = () => {

  const [isToggled, setToggled] = useState(false);

  const toggle = () => setToggled(!isToggled);

  const removeToggle = () => setToggled(false);

  const toggled = !isToggled ? "nav-links" : "nav-links toggle-nav-links";
    
  return (
    <>
    <header>
      <nav>
        <div className="logo-and-menu-button">
          <div className="menu-button sm" onClick={toggle}>&#8801;</div>
          <Link className="logo" onClick={removeToggle} to="/">
            <img src={logo} alt="Logo for Jefferson Mini Warehouses" />
          </Link>
        </div>
        <ul className={toggled}>
          <li><Link onClick={removeToggle} to="/units">Units</Link></li>
          <li><Link onClick={removeToggle} to="/billing">Pay Bill</Link></li>
          <li><Link onClick={removeToggle} to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;