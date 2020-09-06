import React from 'react';

import './_styles.css';

const BookUnit = () => {

  const handleSubmit = () => {
    return;
  }

  const date = new Date();

  //earliest date to book is tomorrow
  const tomorrow = date.getDate() + 1;
  const tomorrowString = tomorrow.toString();

  //latest date to book is 30 days out
  const nextMonth = date.getDate() + 30;
  const nextMonthString = nextMonth.toString();

  return (
    <div className="default-body">      
      <h1>Book A Unit</h1>
      <div className="unit-div paper">
        <form onSubmit={handleSubmit}>
        <h2>Choose a size:</h2>
        <label for="small">Small - $40</label>
        <input type="radio" id="small" name="unitsize" value="small" />
        <label for="large">Large - $80</label>
        <input type="radio" id="large" name="unitsize" value="large" />
        <label for="start">Requested Move In Date:</label>
        <input type="date" id="start" name="start-date"
        value={tomorrowString}
        min={tomorrowString} max={nextMonthString}></input>
        </form>
      </div>
    </div>
  );
}

export default BookUnit;
