import React from 'react';

import Jumbotron from './Jumbotron';
import Headline from './Headline';
import Units from './Units';
import GoogleMaps from './GoogleMaps';

import './_styles.css';

const Home = () => {
    return (
        <div className="home">
          <Jumbotron />
          <Headline />
          <Units />
          <GoogleMaps />
        </div>
    );
}

export default Home;