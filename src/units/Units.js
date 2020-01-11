import React from 'react';
import { Phone } from 'react-feather';

import storageSmallDesktop from '../img/storage-small-desktop.jpg'; 
import storageLargeDesktop from '../img/storage-large-desktop.jpg'; 
import storageSmallMobile from '../img/storage-small-mobile.jpg'; 
import storageLargeMobile from '../img/storage-large-mobile.jpg'; 

function Units() {
    return (
      <div className="default-body">      
        <h1>Available Units</h1>
        <div className="unit-div-parent">
          <div className="unit-div">
            <div className="unit-picture-div">
              <img src={ storageSmallDesktop } alt="Small Storage units are five by ten feet and rent for $20 a month."/>
            </div>
            <div className="unit-picture-div-mobile">
              <img src={ storageSmallMobile } alt="Small Storage units are five by ten feet and rent for $20 a month."/>
            </div>
            <div className="unit-features-div">
              <p className="unit-title">Small 5' x 10'</p>
              <p>$20/<span className="per-month">mo</span>  <span className='strike-through-price'>$30/<span className="per-month">mo</span></span></p>
              <p><Phone size='15' color='#212F3D'/> <a className="phone" href="tel://+17066125081">706-612-5081</a></p>
            </div>
          </div>
          <div className="unit-div">
            <div className="unit-picture-div">
              <img src={ storageLargeDesktop } alt="Large Storage units are ten by ten feet and rent for $40 a month."/>
            </div>
            <div className="unit-picture-div-mobile">
              <img src={ storageLargeMobile } alt="Large Storage units are ten by ten feet and rent for $40 a month."/>
            </div>
            <div className="unit-features-div">
              <p className="unit-title">Large 10' x 10'</p>
              <p>$40/<span className="per-month">mo</span>  <span className='strike-through-price'>$50/<span className="per-month">mo</span></span></p>
              <p><Phone size='15' color='#212F3D'/> <a className="phone" href="tel://+17066125081">706-612-5081</a></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Units;