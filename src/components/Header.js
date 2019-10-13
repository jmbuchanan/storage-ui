import React from 'react';


var Header = function () {
  return (
  <nav>
  <ul class="links">
    <li class="logo">
      <a href="#"><img src="%PUBLIC_URL%/img/logo.gif" /></a>
    </li>
    <li><a href="units">Units</a></li>
    <li><a href="billing">Pay Bill</a></li>
    <li><a href="contact">Contact Us</a></li>
  </ul>
  </nav>		
  );

}

export default Header;
