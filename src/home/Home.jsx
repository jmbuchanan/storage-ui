import React from 'react';

import Jumbotron from './Jumbotron';
import BodyText from './BodyText';
import Features from './Features';
import GoogleMaps from './GoogleMaps';

import './_styles.css';

const Home = () => {
    return (
        <div className="home">
          <Jumbotron />
          <BodyText />
          <Features />
          <GoogleMaps />
        </div>
    );
}

export default Home;