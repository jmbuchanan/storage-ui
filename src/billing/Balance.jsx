import React from 'react';

import './_styles.css';

const Balance = (props) => {
    return (
        <div className="paper billing">
            <h2>Balance</h2>
            <p>{'$' + props.balance}</p>
            <button onClick={props.onClick}>
                Pay Now
            </button>
        </div>
    );
}

export default Balance;