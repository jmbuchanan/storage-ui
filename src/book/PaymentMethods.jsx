import React from 'react';

import './_styles.css';

const PaymentMethods = (props) => {

  if (props.cards.length > 0) {
    return (
      <>
      <h1>Payment Methods</h1>
      <div className="book-unit paper">
        <p>Payment methods found</p>
      </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Payment Methods</h1>
        <div className="book-unit paper">
          <p>No payment methods on file</p>
        </div>
      </>
    );
  }
}

export default PaymentMethods;
