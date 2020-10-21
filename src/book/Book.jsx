import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import ProtectedResource from '../security/ProtectedResource';
import BookUnit from './BookUnit';
import PaymentMethods from './PaymentMethods';
import ConfirmBooking from './ConfirmBooking';

const Book = () => {

  const CONFIRM = 3;

  const [step, setStep] = useState(0);
  const [cards, setCards] = useState([]);
  const [details, setDetails] = useState();
  const [nextEnabled, setNextEnabled] = useState([true, false])

  const fetchCards = async () => {
      const api = process.env.REACT_APP_DOMAIN + '/paymentMethods/fetchByCustomerId';
      await axios
          .get(api, { withCredentials: true })
          .then(response => {
              setCards(response.data)
          })
          .catch(error => {
              console.log("Server or stripe issue");
          });
  }

  useEffect(() => {
    fetchCards();
  }, []);

  const setUnitDetails = (unitNumber, startDate) => {
      details.unitNumber = unitNumber;
      details.startDate = startDate;
      setDetails(details);
  }

  const setNextEnabledByIndex = (i, boolean) => {
      const newState = nextEnabled.slice();
      newState[i] = boolean;
      setNextEnabled(newState);
  }


  const selectCard = (cardIndex) => {
      const card = cards[cardIndex];
      details.lastFour = card.lastFour;
      details.brand = card.brand;
      setDetails(details);
  }

  const Step = () => {
      switch(step) {
          case 0:
              return <BookUnit setUnitDetails={setUnitDetails} setStep={setStep}/>;

          case 1:
              return <PaymentMethods cards={cards} selectCard={selectCard} setNextEnabled={setNextEnabledByIndex} />;

          case 2:
              return <ConfirmBooking details={details}/>;
      }
  }


  const Blank = () => {
      return <div></div>
  }

  const Back = () => {
      return (
        <div>
            <button onClick={goBack}>Back</button>
        </div>
      );
  }

  const Confirm = () => {
        return (
            <div>
                <button onClick={goConfirm}>Confirm</button>
            </div>
        );
  }

  const goBack = () => {
      setStep(step - 1);
  }


  const goConfirm = () => {
      setStep(CONFIRM);
  }

  const brand = cards.length > 0 ? cards[0].brand : "No card";
  const lastFour = cards.length > 0 ? cards[0].lastFour : null;

  if (step == CONFIRM) {
    return <Redirect to="/portal" />;

  } else {
    return (
        <div className="default-body">
        <ProtectedResource>
            <Step />
            <p>{brand}</p>
            <p>{lastFour}</p>
        </ProtectedResource>
        </div>
    )
  }
}

export default Book;