import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import loading from '../img/loading.gif';

const YourUnits = (props) => {

    const [book, setBook] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const redirect = (e) => {
        e.preventDefault();
        setBook(true);
    }

    const redirectToCancel = () => {
        setCancel(true);
    }

    const handleChange = (e) => {
        setSelectedUnitIndex(parseInt(e.target.value));
    }

    const submitCancelRequest = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const unit = props.units[selectedUnitIndex];
        const date = new Date();
        const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00:00`;
        if (unit.canBeCancelledImmediately) {
            const payload = {
            unitId: unit.unitId,
            date: dateStr
            }
            const api = process.env.REACT_APP_DOMAIN + '/subscriptions';
            await axios
                .put(api,
                payload,
                { withCredentials: true }
                )
                .then(response => {
                    props.refreshApiCall();
                })
                .catch(error => {
                    console.log("Server or stripe issue");
            });
        } else {
            redirectToCancel();
        }
        setIsLoading(false);
    }

    const BackButton = (props) => {
        if (props.units.length > 0) {
            return <button className="back-button" onClick={(e) => submitCancelRequest(e)}>Remove</button>;
        } else {
            return null;
        }
    }

    const Units = (props) => {
        const unitsDom = [];
        if (props.units.length > 0) {
            for (var i = 0; i < props.units.length; i++) {
                var selected = (i === selectedUnitIndex);
                var unit = props.units[i]; 
                var largeOrSmall = unit.priceId ? "Large" : "Small";
                const ele = (
                    <div className="radio-option" key={i}>
                        <input type="radio" id={i} checked={selected} value={i} onChange={handleChange} name="unitNumber" />
                        <i className="material-icons material-icons-storefront">storefront</i>
                        <label className="radio-option-label" htmlFor={i}>{`Unit ${unit.unitId}`}</label>
                        <label className="radio-option-label" htmlFor={i}>{largeOrSmall}</label>
                        <label className="radio-option-label" htmlFor={i}>{unit.message}</label>
                    </div>
                );
                unitsDom.push(ele);
            }
            return unitsDom;

        } else {
            return <p>You have no units</p>
        }
    }
    if (isLoading) {
        return <img className="loading" src={loading} alt="loading" />
    } else if (book) {
        return (
            <Redirect to="/book" />
        );
    } else if (cancel) {
            return (
                <Redirect 
                    to={{
                        pathname: "/cancel", 
                        state: {unitId: props.units[selectedUnitIndex].unitId}
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
