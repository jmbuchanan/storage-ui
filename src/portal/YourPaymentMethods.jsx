import React from 'react';

const YourPaymentMethods = (props) => {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const methods = [];
    
    if (props.cardsOnFile.length == 0) {
        return (
        <>
        <h2>Your Payment Methods</h2>
        <div className="payment-methods billing paper">
            <p>You have no cards on file</p>
            <button>Add Payment Method</button>
        </div>
        </>
        )
    }

    for (var i = 0; i < props.cardsOnFile.length; i++) {
        var card = props.cardsOnFile[i];
        var labelText = capitalize(card.cardBrand) +
            " ending in " + card.lastFour;

        var method = (
            <div className="radio-option" key={i}>
                <input type="radio" id={card.id} name="paymentMethod" value={card.id} />
                <i className="material-icons material-icons-payment">payment</i>
                <label className="radio-option-label" htmlFor={card.id}>{labelText}</label>
            </div>
        );

        methods.push(method);
    }
    return (
        <>
        <h2>Your Payment Methods</h2>
        <div className="payment-methods billing paper">
            <label>Select Payment Method</label>
            {methods}
            <button>Add Payment Method</button>
        </div>
        </>
    )
}

export default YourPaymentMethods;