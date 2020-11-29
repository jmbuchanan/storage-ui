import React, { useState } from 'react';
import AddPaymentMethod from './AddPaymentMethod';

const YourPaymentMethods = (props) => {

    const [addPaymentMethod, setAddPaymentMethod] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);

    const handleChange = (e) => {
        setSelectedCardIndex(e.target.value);
    }

    const updatePaymentMethods = () => {
        console.log("lksjfd");
    }


    const removePaymentMethod = () => {
        console.log("sdjfldsjf");
    }

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const methods = [];
    
    if (addPaymentMethod) {
        return (
        <>
        <h2>Your Payment Methods</h2>
        <div className="payment-methods billing paper">
          <AddPaymentMethod onSubmit={updatePaymentMethods}/>
        </div>
        </>
        );
    }

    if (props.cardsOnFile.length == 0) {
        return (
        <>
        <h2>Your Payment Methods</h2>
        <div className="payment-methods billing paper">
            <p>You have no cards on file</p>
            <button onClick={() => setAddPaymentMethod(true)}>Add Payment Method</button>
        </div>
        </>
        )
    }

    for (var i = 0; i < props.cardsOnFile.length; i++) {
        var card = props.cardsOnFile[i];
        var selected = (i == selectedCardIndex);
        var labelText = capitalize(card.cardBrand) +
            " ending in " + card.lastFour;

        var method = (
            <div className="radio-option" key={i}>
                <input type="radio" id={i} checked={selected} value={i} onChange={handleChange} name="paymentMethod" />
                <i className="material-icons material-icons-payment">payment</i>
                <label className="radio-option-label" htmlFor={i}>{labelText}</label>
            </div>
        );

        methods.push(method);
    }
    return (
        <>
        <h2>Your Payment Methods</h2>
        <div className="payment-methods billing paper">
            <label>Manage Your Payment Methods</label>
            {methods}
            <div className="horizontal-buttons">
                <button onClick={() => setAddPaymentMethod(true)}>Add</button>
                <button className="back-button" onClick={removePaymentMethod}>Remove</button>
            </div>
        </div>
        </>
    )
}

export default YourPaymentMethods;