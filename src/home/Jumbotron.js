import React from 'react';

import storageDesktop from '../img/storage-main-desktop.jpg'; 
import storageMobile from '../img/storage-main-mobile.jpg'; 

var Jumbotron = function () {
  return (
    <React.Fragment>
      <div className="picture-div paper">
          <img src={ storageDesktop } className="picture" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
      </div>
      <div className="picture-div-mobile paper">
          <img src={ storageMobile } className="picture" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
      </div>
    </React.Fragment>
  );
}

export default Jumbotron;
