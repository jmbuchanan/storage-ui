import React from 'react';

import storageDesktop from '../img/storage-main-desktop.jpg'; 
import storageMobile from '../img/storage-main-mobile.jpg'; 

const Jumbotron = () => {
  return (
    <>
      <div className="picture-div paper sm">
          <img src={ storageMobile } className="picture" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
      </div>
      <div className="picture-div paper md lg">
          <img src={ storageDesktop } className="picture" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
      </div>
    </>
  );
}

export default Jumbotron;