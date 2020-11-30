import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';

import { AuthContext } from '../context/AuthContext';
import ProtectedResource from '../security/ProtectedResource';
import BookUnit from './BookUnit';
import PaymentMethods from './PaymentMethods';
import ConfirmBooking from './ConfirmBooking';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Book = () => {

  const BOOK = 0;
  const PAYMENT = 1;
  const CONFIRM = 2;
  const SUBMITTED = 3;

  const SMALL = 0;

  //earliest date to book is tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().slice(0,10);

  const { customerId } = useContext(AuthContext);

  const [step, setStep] = useState(BOOK);
  const [cards, setCards] = useState([]);
  const [cardsFetched, setCardsFetched] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);
  const [unitSize, setUnitSize] = useState(SMALL);
  const [bookStartDate, setBookStartDate] = useState(tomorrowString);

  const fetchCards = async () => {
    const api = process.env.REACT_APP_DOMAIN + '/paymentMethods/fetchByCustomerId';
    await axios
        .get(api, { withCredentials: true })
        .then(response => {
            setCards(response.data)
            setCardsFetched(true);
        })
        .catch(error => {
            console.log("Server or stripe issue");
    });
  }


  const setUnitDetails = (unitSize, startDate) => {
      setUnitSize(unitSize);
      setBookStartDate(startDate);
      fetchCards();
  }

  const confirmBooking = async () => {
    const payload = {
      unitSize: unitSize,
      startDate: bookStartDate,
      cardId: cards[selectedCard].id,
      customerId: customerId
    }
    const api = process.env.REACT_APP_DOMAIN + '/units/book';
    await axios
        .post(api,
          payload,
          { withCredentials: true }
          )
        .then(response => {
            setCards(response.data)
            setCardsFetched(true);
        })
        .catch(error => {
            console.log("Server or stripe issue");
    });
  }

  const Step = () => {
      switch(step) {
          case BOOK:
              return <BookUnit unitSize={unitSize} bookStartDate={bookStartDate} setUnitDetails={setUnitDetails} setStep={setStep}/>;

          case PAYMENT:
              return <PaymentMethods cards={cards} selectedCard={selectedCard} loading={!cardsFetched} fetchCards={fetchCards} setSelectedCard={setSelectedCard} setStep={setStep} />;

          case CONFIRM:
              return <ConfirmBooking card={cards[selectedCard]} unit={unitSize} bookStartDate={bookStartDate} setStep={setStep} />;
      }
  }

  if (step == SUBMITTED) {
    confirmBooking();
    return <Redirect to="/portal" />;
  } else {
    return (
        <div className="default-body">
          <ProtectedResource>
            <Elements stripe={stripePromise}>
              <h1>Book A Unit</h1>
              <Step />
            </Elements>
          </ProtectedResource>
        </div>
    )
  }
}

export default Book;