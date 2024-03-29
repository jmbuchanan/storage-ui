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

    const removePaymentMethod = async (e) => {
        e.preventDefault();
        const card = props.cardsOnFile[selectedCardIndex];
        const api = process.env.REACT_APP_DOMAIN + "/paymentMethods/" + card.id;
        await axios
        .delete( api, {
            //data: selectedCardIndex,
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
            <label>Manage Your Payment Methods</label>
            <p>You have no cards on file</p>
            <button onClick={() => setAddPaymentMethod(true)}>Add Payment Method</button>
        </div>
        </>
        )
    }


    for (var i = 0; i < props.cardsOnFile.length; i++) {
        var card = props.cardsOnFile[i];
        var selected = (i == selectedCardIndex);
        var labelText = capitalize(card.cardBrand);

        var method = (
            <div className="radio-option" key={i}>
                <input type="radio" id={i} checked={selected} value={i} onChange={handleChange} name="paymentMethod" />
                <i className="material-icons material-icons-payment">payment</i>
                <label className="radio-option-label" htmlFor={i}>{labelText}</label>
                <label className="radio-option-label" htmlFor={i}>{`Ending in ${card.lastFour}`}</label>
            </div>
        );

        methods.push(method);
    }

    const paymentMethodRemovable = !props.cardsOnFile[selectedCardIndex].associatedWithActiveSubscription;

    return (
        <>
        <h2>Your Payment Methods</h2>
        <div className="payment-methods billing paper">
            <label>Manage Your Payment Methods</label>
            <form>
            {methods}
            <div className="horizontal-buttons">
                <button onClick={() => setAddPaymentMethod(true)}>Add</button>
                <button className="back-button"
                    onClick={paymentMethodRemovable ? removePaymentMethod : (e) => e.preventDefault()} 
                    style={paymentMethodRemovable ? null : {backgroundColor: "gray", color: "white", cursor: "not-allowed"} }
                >Remove</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default YourPaymentMethods;