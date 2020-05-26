import React, {useContext} from 'react';

import './_styles.css';
import { AuthContext } from '../context/AuthContext';


const Greeting = () => {

  const { firstName, setUserBasedOnAuthCookie } = useContext(AuthContext);

  const handleLogout = () => {
    document.cookie = emptyAndExpired;
    setUserBasedOnAuthCookie();
  }

  const emptyAndExpired = "Authorization=;expires= Thu, 21 Aug 2014 20:00:00 UTC";

  const GreetingMessage = () => (
    <div className="greeting">
      <p>
        {"Hello, " + firstName + "! "}
        <span
          className="logout"
          onClick={handleLogout}>
            Logout
        </span>
      </p>
    </div>
  );

  if (firstName) {
    return <GreetingMessage />;
  } else {
    return null;
  }
}

export default Greeting;