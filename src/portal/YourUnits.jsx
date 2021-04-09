import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import axios from 'axios';

const YourUnits = (props) => {

    const [book, setBook] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
    const [cancelStatusCode, setCancelStatusCode] = useState('');

    const redirect = () => {
        setBook(true);
    }

    const handleChange = (e) => {
        setSelectedUnitIndex(e.target.value);
    }

    const redirectToCancel = () => {
        setCancel(true);
    }


    const BackButton = (props) => {
        if (props.units.length > 0) {
            return <button className="back-button" onClick={redirectToCancel}>Remove</button>;
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
                var largeOrSmall = unit.priceId ? "Large" : "Small";
                const ele = (
                    <div className="radio-option" key={i}>
                        <input type="radio" id={i} checked={selected} value={i} onChange={handleChange} name="unitNumber" />
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
    } else if (cancel) {
        const unitNumber = props.units[selectedUnitIndex].unitNumber;
        return (
            <Redirect 
                to={{
                    pathname: "/cancel", 
                    state: {unitNumber: unitNumber}
                }}
            />
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
