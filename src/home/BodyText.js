import React from 'react';
import { Phone } from 'react-feather';

const BodyText = () => {
  return (
    <div className="body-text paper">
      <h1>Warehouses in Jefferson, GA for Your Storage Needs</h1>
      <p>Jefferson Mini Warehouses offers secure and affordable self-storage warehouses
         conveniently located in downtown Jefferson. With professional management and over 40 units with a variety of sizes, we are here to meet all of your storage needs. Call today to learn more!
      </p>
      <Phone size='15' color='#212F3D'/> <a className="phone" href="tel://+14044417583">404-441-7583</a>
    </div>
  );
}

export default BodyText;