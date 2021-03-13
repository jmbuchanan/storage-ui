import { CardCvcElement } from '@stripe/react-stripe-js';
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
        <div>
          <h2>Confirm Booking</h2>
          <p>{props.unitSize == 0 ? "Small Unit" : "Large Unit"}</p>
          <p>{"Available " + props.bookStartDate}</p>
          <p>{"Payment Method ending in " + props.card.lastFour}</p>
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
      </div>
    </>
  );
}

export default ConfirmBooking;
