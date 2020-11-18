import React, {useState } from 'react';
import Navigator from './Navigator';
import AddPaymentMethod from '../portal/AddPaymentMethod';

import './_styles.css';

const PaymentMethods = (props) => {

  const STEP_INDEX = 1;

  const [nextEnabled, setNextEnabled] = useState(props.cards.length > 0);

  const goNext = () => {
    props.setStep(STEP_INDEX + 1);
  }

  const goBack = () => {
    props.setStep(STEP_INDEX - 1);
  }

  const updatePaymentMethods = () => {
    props.fetchCards();
  }

  const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (props.loading) {
    return (
      <div className="book-unit paper">
        <h2>Payment Methods</h2>
      </div>
    );
  }

  const methods = [];

  for (var i = 0; i < props.cards.length; i++) {
    var card = props.cards[i];
    var labelText = capitalize(card.cardBrand) +
        " ending in " + card.lastFour;

    var method = (
        <div className="radio-option" key={i}>
            <input type="radio" id={card.id} checked={i == 0} name="paymentMethod" value={card.id} />
            <i className="material-icons material-icons-payment">payment</i>
            <label className="radio-option-label" htmlFor={card.id}>{labelText}</label>
        </div>
    );

    methods.push(method);
  }


  if (props.cards.length > 0) {
    return (
      <>
      <div className="book-unit paper">
        <h2>Payment Methods</h2>
        {methods}
      </div>
      <div className="navigator">
        <Navigator 
          backEnabled={true}
          nextEnabled={nextEnabled}
          goBack={goBack}
          goNext={goNext}
        />
      </div>
      </>
    );
  } else {
    return (
      <>
        <div className="book-unit paper">
          <AddPaymentMethod onSubmit={updatePaymentMethods}/>
        </div>
        <div className="navigator">
          <Navigator 
            backEnabled={true}
            nextEnabled={nextEnabled}
            goBack={goBack}
            goNext={goNext}
          />
        </div>
      </>
    );
  }
}

export default PaymentMethods;
