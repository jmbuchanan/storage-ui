import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const YourUnits = () => {

    const [book, setBook] = useState(false);

    const redirect = () => {
        setBook(true);
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
                <p>You have no units.</p>
                <button onClick={redirect}>Book A Unit</button>
            </div>
            </>
        );
    }
}

export default YourUnits;