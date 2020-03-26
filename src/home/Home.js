import React from 'react';

import Jumbotron from './Jumbotron';
import BodyText from './BodyText';
import Features from './Features';

import './styles.css';

function Home() {

    return (
        <div className="home">
          <Jumbotron />
          <BodyText />
          <Features />
        </div>
    );
}

export default Home;