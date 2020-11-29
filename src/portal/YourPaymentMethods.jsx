import React, { useState } from 'react';
import AddPaymentMethod from './AddPaymentMethod';

import axios from 'axios';

const YourPaymentMethods = (props) => {

    const [addPaymentMethod, setAddPaymentMethod] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [deleteStatusCode, setDeleteStatusCode] = useState(0);

    const handleChange = (e) => {
        setSelectedCardIndex(e.target.value);
    }

    const updatePaymentMethods = () => {
        setAddPaymentMethod(false);
        props.refreshApiCall();
    }

    const removePaymentMethod = async () => {
        const cardId = props.cardsOnFile[selectedCardIndex].id;

        const api = process.env.REACT_APP_DOMAIN + "/paymentMethods/" + cardId;
        console.log(api);
        await axios
        .delete( api, {
            data: selectedCardIndex,
            withCredentials: true})
        .then(response => {
            setDeleteStatusCode(response.status)})
        .catch(error => {
            if (error.response) {
            setDeleteStatusCode(error.response.status)
            } else {
            setDeleteStatusCode(500);
            }
        });

        setSelectedCardIndex(0);
        props.refreshApiCall();
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