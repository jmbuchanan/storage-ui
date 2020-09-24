import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import ProtectedResource from '../security/ProtectedResource';
import BookUnit from './BookUnit';
import PaymentMethods from './PaymentMethods';
import ConfirmBooking from './ConfirmBooking';

const Book = () => {

  const CONFIRM = 4;

  const [step, setStep] = useState(1);

  const Step = () => {
      switch(step) {
          case 1:
              return <BookUnit />;

          case 2:
              return <PaymentMethods />;

          case 3:
              return <ConfirmBooking />;
      }
  }

  const Navigator = () => {
      switch(step) {
          case 1:
              return (
                <>
                <Blank />
                <Next />
                </>
              );

          case 2:
              return (
                  <>
                  <Back />
                  <Next />
                  </>
              );
        
          case 3:
              return (
                  <>
                  <Back />
                  <Confirm />
                  </>
              );
      }
  }

  const Blank = () => {
      return <div></div>
  }

  const Back = () => {
      return (
        <div>
            <button onClick={goBack}>Back</button>
        </div>
      );
  }
  const Next = () => {
      return (
        <div>
            <button onClick={goNext}>Next</button>
        </div>
      );
  }

  const Confirm = () => {
      return (
        <div>
            <button onClick={goConfirm}>Confirm</button>
        </div>
      );
  }

  const goBack = () => {
      setStep(step - 1);
  }

  const goNext = () => {
      setStep(step + 1);
  }

  const goConfirm = () => {
      setStep(CONFIRM);
  }

  if (step == CONFIRM) {
    return <Redirect to="/portal" />;

  } else {
    return (
        <div className="default-body">
        <ProtectedResource>
            <Step />
            <div className="navigator">
                <Navigator />
            </div>
        </ProtectedResource>
        </div>
    )
  }
}

export default Book;