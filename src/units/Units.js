import React from 'react';

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
              <p>5x10 - Small Storage</p>
              <p>$20 / mo.</p>
              <p>Call now to book! 706-612-5081</p>
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
              <p>10x10 - Large Storage</p>
              <p>$40 / mo.</p>
              <p>Call now to book! 706-612-5081</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Units;