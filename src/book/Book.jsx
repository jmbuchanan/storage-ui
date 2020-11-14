import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';

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

  //earliest date to book is tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().slice(0,10);

  const [step, setStep] = useState(0);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
  const [unitSize, setUnitSize] = useState(0);
  const [bookStartDate, setBookStartDate] = useState(tomorrowString);

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

  const setUnitDetails = (unitSize, startDate) => {
      setUnitSize(unitSize);
      setBookStartDate(startDate);
  }

  const Step = () => {
      switch(step) {
          case BOOK:
              return <BookUnit unitSize={unitSize} bookStartDate={bookStartDate} setUnitDetails={setUnitDetails} setStep={setStep}/>;

          case PAYMENT:
              return <PaymentMethods cards={cards} setSelectedCard={setSelectedCard} setStep={setStep} />;

          case CONFIRM:
              return <ConfirmBooking card={cards[selectedCard]} unit={unitSize} bookStartDate={bookStartDate} setStep={setStep}/>;
      }
  }

  const brand = cards.length > 0 ? cards[0].cardBrand : "No card";
  const lastFour = cards.length > 0 ? cards[0].lastFour : null;

  if (step == SUBMITTED) {
    return <Redirect to="/portal" />;
  } else {
    return (
        <div className="default-body">
          <ProtectedResource>
            <Elements stripe={stripePromise}>
              <h1>Book A Unit</h1>
              <Step />
              <p>Step: {step}</p>
              <p>Unit Type: {unitSize}</p>
              <p>Start Date: {bookStartDate}</p>
              <p>Card Brand: {brand}</p>
              <p>Card Last Four: {lastFour}</p>
            </Elements>
          </ProtectedResource>
        </div>
    )
  }
}

export default Book;