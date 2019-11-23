import React from 'react';

import Jumbotron from './Jumbotron';
import BodyText from './BodyText';
import GoogleMap from './GoogleMap';
import axios from 'axios';

function Home() {

  axios.get("http://localhost:8080/private", {withCredentials: true})
  .then(result => {
    console.log(result.data);
  })
  .catch(error => {
    console.log(error);
  });

    return (
        <div className="home">
          <Jumbotron />
          <BodyText />
          <GoogleMap />
        </div>
    );
}

export default Home;