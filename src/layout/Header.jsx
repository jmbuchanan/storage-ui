import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'react-feather';
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
          <li><Link onClick={removeToggle} to="/portal">Portal</Link></li>
          <li><a className="phone" href="tel://+14044417583"><Phone size='14' color='white'/> 404-441-7583</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;