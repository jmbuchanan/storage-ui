import React from 'react';

import Jumbotron from './Jumbotron';
import BodyText from './BodyText';
import GoogleMap from './GoogleMap';

function Home() {

    return (
        <div className="home">
          <Jumbotron />
          <BodyText />
          <GoogleMap />
        </div>
    );
}

export default Home;