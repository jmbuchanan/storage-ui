import React from 'react';

import './_styles.css';

const Navigator = (props) => {
    
    const nextLabel = props.nextLabel ? props.nextLabel : "Next";
    const nextEnabled = props.nextEnabled;
    const backEnabled = props.backEnabled;

    const Back = () => {
        if (backEnabled) {
            return <button onClick={props.goBack}>Back</button>;
        } else {
            return <div></div>;
        }
    }

    const Next = () => {
        if (nextEnabled) {
            return <button onClick={props.goNext}>{nextLabel}</button>;
        } else {
            return <button style={{backgroundColor: "gray"}}>{nextLabel}</button>;
        }
    }

    return (
        <>
        <Back/>
        <Next/>
        </>
    )
}

export default Navigator;
