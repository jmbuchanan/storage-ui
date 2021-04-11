import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ProtectedResource from '../security/ProtectedResource';
import axios from 'axios';
import loading from '../img/loading.gif';

const Cancel = (props) => {

  const VALID_DATE = 0;
  const BEFORE_TODAY = 1;
  const AFTER_MAX_DAYS_OUT = 2;
  const NO_DATE_SELECTED = 3;
  const MAX_DAYS_OUT = 30;

  const DATE_WARNING_MESSAGE = "Units can only be booked one to thirty days out."

  const today = new Date();

  const [cancelStatus, setCancelStatus] = useState(null);
  const [date, setDate] = useState('');
  const [dateWarning, setDateWarning] = useState(VALID_DATE);
  const [cancelConfirm, setCancelConfirm] = useState(false);
  const [isValidDate, setIsValidDate] = useState(true);

  const enableApiCallHook = () => {
  }

  const fetchCancelStatus = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/transactions/cancel/eligibility/" + props.location.state.unitNumber;
    const response = await axios.get(
      api, {withCredentials: true}
    )
    .then(response => {
      setCancelStatus(response.data);
      if (response.data == 0) {
        submitCancelRequest(response.data);
      }
    })
    .catch(error => {
      console.log("Server or stripe issue");
    });
  }

  const submitCancelRequest = async (status) => {
    const cancelImmediately = status == 0 ? true : false;
    const formattedDate = formatCancelDate(date);
    const payload = {
      unitId: props.location.state.unitNumber,
      executionDate: formattedDate,
      cancelImmediately: cancelImmediately
    }
    const api = process.env.REACT_APP_DOMAIN + '/transactions/cancel';
    await axios
        .post(api,
          payload,
          { withCredentials: true }
          )
        .then(response => {
          setCancelConfirm(true);
        })
        .catch(error => {
            console.log("Server or stripe issue");
    });
  }

  useEffect(() => {
    fetchCancelStatus();
  }, []);

  //calendar needs to be between tomorrow and 30 days out
  const verifyDate = (bookDate, today) => {
    if (bookDate == '') {
      return NO_DATE_SELECTED;
    }

    bookDate = new Date(bookDate);
    const daysDiff = differenceInDays(bookDate, today);

    if (daysDiff > MAX_DAYS_OUT) {
      return AFTER_MAX_DAYS_OUT;
    } else if (daysDiff < 0) {
      return BEFORE_TODAY;
    } else {
      return VALID_DATE;
    }
  }

  //returns integer
  const differenceInDays = (dt1, dt2) => {
    return Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  const DateWarning = (props) => {
    if (props.dateWarning != 0) {
      return <span className="date-warning">{DATE_WARNING_MESSAGE}</span>;
    } else {
      return null;
    }
  }


  const formatCancelDate = (date) => {
    return date + " 00:00:00";
  }

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const code = verifyDate(selectedDate, today);
    const isValidDate = (code == VALID_DATE);
    setIsValidDate(isValidDate);
    setDateWarning(code);
    setDate(selectedDate);
  }

  if (cancelConfirm) {
    return <Redirect to="/portal" />;
  }

  if (cancelStatus == null || cancelStatus == 0) {
    return <img className="loading" src={loading} alt="loading" />
  }

  if (cancelStatus == 1) {
    return (
      <div className="default-body">
          <ProtectedResource enableApiCall={enableApiCallHook}>
            <h1>Cancel Your Subscription</h1>
            <div className="paper billing">
              <p>Unit number {props.location.state.unitNumber}</p>
              <label for="start">Requested Cancellation Date:</label>
              <br />
              <input type="date" id="start" name="cancel-date" style={{maxWidth: 120}} onChange={handleDateChange} value={date}></input>
              <br />
              <DateWarning dateWarning={dateWarning}/>
              <br />
              <button onClick={(date) => submitCancelRequest(date)}>Cancel</button>
            </div>
          </ProtectedResource>
      </div>
    );
  }

  if (cancelStatus == 2) {
    return (
      <div className="default-body">
        <h1>Something has gone wrong...</h1>
      </div>
    );
  }
}

export default Cancel;