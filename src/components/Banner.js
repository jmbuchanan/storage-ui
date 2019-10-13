import React from 'react';

import storageOne from '../img/storage-1.jpg'; 

var Banner = function () {
  return (
    <div className="picture-div">
        <img src={ storageOne } className="picture" alt="storage units"/>
    </div>
  );
}

export default Banner;
