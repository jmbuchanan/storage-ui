import React, { useState } from 'react';
import ProtectedResource from '../security/ProtectedResource';

const Cancel = (props) => {

  const [enableApiCall, setEnableApiCall] = useState(false);

  const enableApiCallHook = () => {
    setEnableApiCall(true);
  }

  const handleDateChange = () => {
      return null;
  }

  const cancelDate = null;
  /*
    const removeUnit = async (e) => {
        e.preventDefault();
        const unitNumber = props.units[selectedUnitIndex].unitNumber;
        const api = process.env.REACT_APP_DOMAIN + "/transactions/cancel";
        await axios
        .post(api,
          payload,
          { withCredentials: true }
          )
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
    */

  return (
    <div className="default-body">
        <ProtectedResource enableApiCall={enableApiCallHook}>
            <h1>Cancel Your Subscription</h1>
            <p>Unit number {props.location.state.unitNumber}</p>
            <p>Select Date</p>
            <input type="date" id="start" name="start-date" onChange={handleDateChange} value={cancelDate}></input>
        </ProtectedResource>
    </div>
  )
}

export default Cancel;