import React from 'react';
import { Phone } from 'react-feather';

import './_styles.css';

import storageSmallDesktop from '../img/storage-small-desktop.jpg'; 
import storageLargeDesktop from '../img/storage-large-desktop.jpg'; 
import storageSmallMobile from '../img/storage-small-mobile.jpg'; 
import storageLargeMobile from '../img/storage-large-mobile.jpg'; 

export const Units = () => {
  return (
    <div className="default-body">      
      <h1>Available Units</h1>
      <div className="unit-div-parent">
        <div className="unit-div">
          <div className="unit-picture-div">
            <img src={ storageSmallDesktop } alt="Small Storage units are five by ten feet and rent for $40 a month."/>
          </div>
          <div className="unit-picture-div-mobile">
            <img src={ storageSmallMobile } alt="Small Storage units are five by ten feet and rent for $40 a month."/>
          </div>
          <div className="unit-features-div">
            <p className="unit-title">Small 5' x 10'</p>
            <p>$40/<span className="per-month">mo</span>  <span className='strike-through-price'>$50/<span className="per-month">mo</span></span></p>
            <p><Phone size='15' color='#212F3D'/> <a className="phone" href="tel://+14044417583">404-441-7583</a></p>
          </div>
        </div>
        <div className="unit-div">
          <div className="unit-picture-div">
            <img src={ storageLargeDesktop } alt="Large Storage units are ten by ten feet and rent for $80 a month."/>
          </div>
          <div className="unit-picture-div-mobile">
            <img src={ storageLargeMobile } alt="Large Storage units are ten by ten feet and rent for $80 a month."/>
          </div>
          <div className="unit-features-div">
            <p className="unit-title">Large 10' x 20'</p>
            <p>$80/<span className="per-month">mo</span>  <span className='strike-through-price'>$90/<span className="per-month">mo</span></span></p>
            <p><Phone size='15' color='#212F3D'/> <a className="phone" href="tel://+14044417583">404-441-7583</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
