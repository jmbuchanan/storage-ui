import React, { useEffect, useContext } from 'react';

import './_styles.css';
import { AuthContext } from '../context/AuthContext';


const Greeting = () => {

  const { firstName, checkLogin } = useContext(AuthContext);

  const handleLogout = () => {
    document.cookie = "Authorization=;expires= Thu, 21 Aug 2014 20:00:00 UTC";
    checkLogin();
  }


  return firstName ? 
    (
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
    ) : null;
}

export default Greeting;