import React from 'react';

import Banner from '../components/Banner';
import BodyText from '../components/BodyText';
import GoogleMap from '../components/GoogleMap';

function Home() {
    return (
      <div className="default-body">
        <div className="home">
          <Banner />
          <BodyText />
          <GoogleMap />
        </div>
      </div>
    );
}

export default Home;