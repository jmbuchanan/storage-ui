import React, { useState } from 'react';
import Navigator from './Navigator';

import './_styles.css';


const BookUnit = (props) => {

  //this is the first step in the checkout process
  const STEP_INDEX = 0;

  //unit size constants
  const SMALL = 0;
  const LARGE = 1;

  //date warning constants
  const VALID_DATE = 0;
  const BEFORE_TODAY = 1;
  const AFTER_MAX_DAYS_OUT = 2;
  const NO_DATE_SELECTED = 3;
  const MAX_DAYS_OUT = 30;

  const DATE_WARNING_MESSAGE = "Units can only be booked one to thirty days out."

  const today = new Date();

  //latest date to book is 30 days out
  const nextMonth = new Date(today);
  nextMonth.setDate(today.getDate() + 30);

  //state
  const [unit, setUnit] = useState(props.unitSize);
  const [date, setDate] = useState(props.bookStartDate);
  const [dateWarning, setDateWarning] = useState(VALID_DATE);
  const [nextEnabled, setNextEnabled] = useState(true);

  //small, large radio buttons
  const handleUnitChange = () => {
    setUnit(unit == SMALL ? LARGE : SMALL);
  }

  //calendar
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const code = verifyDate(selectedDate, today);
    const isValidDate = (code == VALID_DATE);
    setNextEnabled(isValidDate);
    setDateWarning(code);
    setDate(selectedDate);
  }

  //calendar needs to be between tomorrow and 30 days out
  const verifyDate = (bookDate, today) => {
    if (bookDate == '') {
      return NO_DATE_SELECTED;
    }

    bookDate = new Date(bookDate);
    const daysDiff = differenceInDays(bookDate, today);

    if (daysDiff > MAX_DAYS_OUT) {
      return AFTER_MAX_DAYS_OUT;
    } else if (daysDiff < 0) {
      return BEFORE_TODAY;
    } else {
      return VALID_DATE;
    }
  }

  //returns integer
  const differenceInDays = (dt1, dt2) => {
    return Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  const DateWarning = (props) => {
    if (props.dateWarning != 0) {
      return <span className="date-warning">{DATE_WARNING_MESSAGE}</span>;
    } else {
      return null;
    }
  }

  const goNext = () => {
    props.setUnitDetails(unit, date);
    props.setStep(STEP_INDEX + 1);
  }

  const goBack = () => {
    props.setStep(STEP_INDEX - 1);
  }

  return (
    <>
      <div className="book-unit paper">
        <div>
          <h2>Choose Unit Size</h2>
          <div className="choice">
            <label for="small">Small - $40</label>
            <input type="radio"
              id="small"
              checked={unit == SMALL}
              onChange={handleUnitChange}
              name="unitsize"
              value="small"
              />
          </div>
          <div className="choice">
            <label for="large">Large - $80</label>
            <input type="radio"
              id="large"
              checked={unit == LARGE}
              onChange={handleUnitChange}
              name="unitsize"
              value="small"
              />
          </div>
          <div className="choice-stacked">
            <label for="start">Requested Move In Date:</label>
            <input type="date" id="start" name="start-date" onChange={handleDateChange} value={date}></input>
          </div>
          <DateWarning dateWarning={dateWarning}/>
        </div>
        <div className="navigator">
          <Navigator 
            backEnabled={false}
            nextEnabled={nextEnabled}
            goBack={goBack}
            goNext={goNext}
          />
        </div>
      </div>
    </>
  );
}

export default BookUnit;
