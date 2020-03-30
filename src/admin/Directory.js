import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchUser = async () => {

}


const Directory = () => {

  const [admin, setAdmin] = useState(false);

  useEffect(async () => {
    const url = process.env.REACT_APP_DOMAIN  
    const response = await axios.get('a')
  })

  if (admin) {
    return (
      <div className="default-body">
        <h1>Table of Contents</h1>
        <ul className="toc">
            <li><a href="/admin/customers">Customers</a></li>
            <li><a href="/admin/units">Units</a></li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="default-body">
        <p>Checking credentials...</p>
      </div>
    )
  }
}

export default Directory;