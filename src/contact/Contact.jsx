import React from 'react';

import { Phone } from 'react-feather';

import './_styles.css';

const Contact = () => {
    return (
      <div className="default-body">      
        <h1>Contact Us</h1>
        <div className="contact paper">
          <Phone size='15' color='#0f576a'/> <a className="phone" href="tel://+14044417583">404-441-7583</a>
        </div>
      </div>
    );
}

export default Contact;