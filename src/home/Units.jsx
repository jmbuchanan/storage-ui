import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'react-feather';

import './_styles.css';

import storageSmallDesktop from '../img/cropped-storage-small.jpg'; 
import storageLargeDesktop from '../img/cropped-storage-large.jpg'; 
import storageSmallMobile from '../img/cropped-storage-small.jpg'; 
import storageLargeMobile from '../img/cropped-storage-large.jpg'; 

const Units = () => {
  return (
    <div className="units paper">      
      <div className="unit-div">
        <div className="unit-picture-div md lg">
          <img src={ storageSmallDesktop } alt="Small Storage units are five by ten feet and rent for $40 a month."/>
        </div>
        <div className="unit-picture-div sm">
          <img src={ storageSmallMobile } alt="Small Storage units are five by ten feet and rent for $40 a month."/>
        </div>
        <div className="unit-features-div">
          <p>Small 5x10</p>
          <p>$40/<span className="per-month">mo</span>  <span className='strike-through-price'>$50/<span className="per-month">mo</span></span></p>
          <p><Phone size='15' color='#0f576a'/> <a className="phone" href="tel://+14044417583">404-441-7583</a></p>
          <Link to="/contact" className="book-now">Book Now</Link>
        </div>
      </div>
      <div className="unit-div">
        <div className="unit-picture-div md lg">
          <img src={ storageLargeDesktop } alt="Large Storage units are ten by ten feet and rent for $80 a month."/>
        </div>
        <div className="unit-picture-div sm">
          <img src={ storageLargeMobile } alt="Large Storage units are ten by ten feet and rent for $80 a month."/>
        </div>
        <div className="unit-features-div">
          <p>Large 10x20</p>
          <p>$80/<span className="per-month">mo</span>  <span className='strike-through-price'>$90/<span className="per-month">mo</span></span></p>
          <p><Phone size='15' color='#0f576a'/> <a className="phone" href="tel://+14044417583">404-441-7583</a></p>
          <Link to="/contact" className="book-now">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Units;