import React from 'react';

import { Lock, Box, DollarSign } from 'react-feather';

const Features = () => {
  return (
    <div className="features paper">
      <ul>
        <li><Lock size='50' color='#212F3D'/><span className="feature">Secure</span></li>
        <li><Box size='50' color='#212F3D'/><span className="feature">Local</span></li>
        <li><DollarSign size='50' color='#212F3D'/><span className="feature">Affordable</span></li>
      </ul>
    </div>
  );
}

export default Features;