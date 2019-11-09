import React from 'react';

import storageOne from '../img/storage-1.jpg'; 

var Jumbotron = function () {
  return (
    <div className="picture-div">
        <img src={ storageOne } className="picture" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
    </div>
  );
}

export default Jumbotron;
