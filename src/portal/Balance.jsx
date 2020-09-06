import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = (props) => {

  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
      fetchPaymentMethods();
  }, [])

  const fetchPaymentMethods = async () => {
      const api = process.env.REACT_APP_DOMAIN + '/paymentMethods/fetchByCustomerId';
      await axios
          .get(api, { withCredentials: true })
          .then(response => {
              setPaymentMethods(response.data)
          })
          .catch(error => {
              if (error.response) {
                  console.log("something went wrong");
              } else {
                  console.log("something went wrong");
              }
          });
  }


  const PaymentMethods = () => {
      const options = [];

      for (var i = 0; i < paymentMethods.length; i++) {
          var method = paymentMethods[i];
          var labelText = capitalize(method.cardBrand) +
              " ending in " + method.lastFour;

          var option = (
              <div className="radio-option" key={i}>
                  <input type="radio" id={method.id} name="paymentMethod" value={method.id} />
                  <i className="material-icons material-icons-payment">payment</i>
                  <label className="radio-option-label" htmlFor={method.id}>{labelText}</label>
              </div>
          );

          options.push(option);
      }
      return (
          <>
              <label>Select Payment Method</label>
              {options}
          </>
      )
  }

  const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const PaymentDetails = () => {
      if (paymentMethods.length > 0) {
          return (
              <div className="billing paper">
                  <h2>Payment Details</h2>
                  <form>
                      <label>Enter Amount To Pay</label>
                      <input
                          type="text"
                          placeholder="$0.00"
                          value={"$0.00"}
                          onChange={() => null}
                      />
                      <PaymentMethods />
                      <button onClick={props.onClick}>
                          Pay Now
                  </button>
                  </form>
              </div>
          );
      } else {
          return null;
      }
  }


  return (
      <>
          <PaymentDetails />
      </>
  );
}

export default Balance;