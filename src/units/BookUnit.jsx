import React from 'react';

import './_styles.css';

const BookUnit = () => {

  const handleSubmit = () => {

  }

  return (
    <div className="default-body">      
      <h1>Book A Unit</h1>
      <div className="unit-div paper">
        <form onSubmit={handleSubmit}>
        <h2>Choose a size:</h2>
        <label for="small">Small</label>
        <input type="radio" id="small" name="unitsize" value="small" />
        <label for="large">Large</label>
        <input type="radio" id="large" name="unitsize" value="large" />
        </form>
      </div>
    </div>
  );
}

export default BookUnit;
