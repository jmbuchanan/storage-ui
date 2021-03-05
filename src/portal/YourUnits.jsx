import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

const YourUnits = (props) => {

    const [book, setBook] = useState(false);
    const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
    const [cancelStatusCode, setCancelStatusCode] = useState('');

    const redirect = () => {
        setBook(true);
    }

    const handleChange = (e) => {
        setSelectedUnitIndex(e.target.value);
    }

    const removeUnit = async (e) => {
        e.preventDefault();
        const unitNumber = props.units[selectedUnitIndex].unitNumber;
        const api = process.env.REACT_APP_DOMAIN + "/transactions/cancel/" + unitNumber;
        await axios( api, {
            method: 'PUT',
            withCredentials: true})
        .then(response => {
            setCancelStatusCode(response.status)})
        .catch(error => {
            if (error.response) {
            setCancelStatusCode(error.response.status)
            } else {
            setCancelStatusCode(500);
            }
        });

        setSelectedUnitIndex(0);
        props.refreshApiCall();
    }

    const BackButton = (props) => {
        if (props.units.length > 0) {
            return <button className="back-button" onClick={removeUnit}>Remove</button>;
        } else {
            return null;
        }
    }

    const Units = (props) => {
        const unitsDom = [];
        if (props.units.length > 0) {
            for (var i = 0; i < props.units.length; i++) {
                var selected = (i == selectedUnitIndex);
                var unit = props.units[i]; 
                var largeOrSmall = unit.isLarge ? "Large" : "Small";
                const ele = (
                    <div className="radio-option" key={i}>
                        <input type="radio" id={i} checked={selected} value={i} onChange={handleChange} name="paymentMethod" />
                        <i className="material-icons material-icons-storefront">storefront</i>
                        <label className="radio-option-label" htmlFor={i}>{`Unit ${unit.unitNumber} - ${largeOrSmall}`}</label>
                    </div>
                );
                unitsDom.push(ele);
            }
            return unitsDom;

        } else {
            return <p>You have no units</p>
        }
    }

    if (book) {
        return (
            <Redirect to="/book" />
        );
    } else {
        return (
            <>
            <h2>Your Units</h2>
            <div className="user-units billing paper">
                <label>Manage Your Units</label>
                <form>
                <Units units={props.units}/>
                <div className="horizontal-buttons">
                    <button onClick={redirect}>Book A Unit</button>
                    <BackButton units={props.units} />
                </div>
                </form>
            </div>
            </>
        );
    }
}

export default YourUnits;
