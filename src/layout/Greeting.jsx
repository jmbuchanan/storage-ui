import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import './_styles.css';
import { AuthContext } from '../context/AuthContext';


const Greeting = () => {

  const { firstName, setUserBasedOnAuthCookie } = useContext(AuthContext);

  const handleLogout = () => {
    document.cookie = "Authorization=; path=/; expires= Thu, 21 Aug 2014 20:00:00 UTC";
    setUserBasedOnAuthCookie();
  }

  const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const GreetingMessage = () => (
    <div className="greeting">
      <p>
        {"Hello, " + capitalize(firstName) + "! "}
        <Link
          className="logout"
          onClick={handleLogout}>
            Logout
        </Link>
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
