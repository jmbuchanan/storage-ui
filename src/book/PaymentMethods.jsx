import React from 'react';
import Navigator from './Navigator';
import AddPaymentMethod from '../portal/AddPaymentMethod';

import './_styles.css';

const PaymentMethods = (props) => {

  const STEP_INDEX = 1;

  const handleChange = (e) => {
    props.setSelectedCard(parseInt(e.target.value));
  }

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
            <input type="radio" id={i} checked={i == props.selectedCard} onChange={handleChange} name="paymentMethod" value={i} />
            <i className="material-icons material-icons-payment">payment</i>
            <label className="radio-option-label" htmlFor={i}>{labelText}</label>
        </div>
    );

    methods.push(method);
  }


  if (props.cards.length > 0) {
    return (
      <>
      <div className="book-unit paper">
        <div>
          <h2>Payment Methods</h2>
          {methods}
        </div>
        <div className="navigator">
          <Navigator 
            backEnabled={true}
            nextEnabled={props.cards.length > 0}
            goBack={goBack}
            goNext={goNext}
          />
        </div>
      </div>
      </>
    );
  } else {
    return (
      <>
        <div className="book-unit paper">
          <AddPaymentMethod onSubmit={updatePaymentMethods}/>
          <div className="navigator">
            <Navigator 
              backEnabled={true}
              nextEnabled={props.cards.length > 0}
              goBack={goBack}
              goNext={goNext}
            />
          </div>
        </div>
      </>
    );
  }
}

export default PaymentMethods;
