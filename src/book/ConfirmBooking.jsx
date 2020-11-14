import React from 'react';
import Navigator from './Navigator';

import './_styles.css';

const ConfirmBooking = (props) => {

  const STEP_INDEX = 2;

  const goNext = () => {
    props.setStep(STEP_INDEX + 1);
  }

  const goBack = () => {
    props.setStep(STEP_INDEX - 1);
  }

  return (
    <>
      <div className="book-unit paper">
      <h2>Confirm Booking</h2>
      <p>Small Unit</p>
      <p>Available 11/02/20</p>
      <p>Payment Method Visa ending in 4242</p>
      </div>
      <div className="navigator">
        <Navigator 
          backEnabled={true}
          nextEnabled={true}
          goBack={goBack}
          goNext={goNext}
          nextLabel={"Confirm"}
        />
      </div>
    </>
  );
}

export default ConfirmBooking;
