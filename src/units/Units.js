import React from 'react';

import storageSmall from '../img/storage-3.jpg'; 
import storageLarge from '../img/storage-2.jpg'; 

function Units() {
    return (
      <div className="default-body">      
        <h1>Available Units</h1>
        <div className="unit-div-parent">
          <div className="unit-div">
            <div className="unit-picture-div">
              <img src={ storageSmall } alt="Storage units located conveniently close to downtown Jefferson, GA"/>
            </div>
            <div className="unit-features-div">
              <p>5x10 - Small Storage</p>
              <p>$20 / mo.</p>
              <p>Call now to book! 706-612-5081</p>
            </div>
          </div>
          <div className="unit-div">
            <div className="unit-picture-div">
              <img src={ storageLarge } alt="Storage units located conveniently close to downtown Jefferson, GA"/>
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