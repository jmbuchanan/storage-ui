import React from 'react';
import { Phone } from 'react-feather';

const Contact = () => {
    return (
      <div className="default-body">      
        <h1>Contact Us</h1>
        <p><Phone size='15' color='#212F3D'/> <a className="phone" href="tel://+14044417583">404-441-7583</a></p>
      </div>
    );
}

export default Contact;