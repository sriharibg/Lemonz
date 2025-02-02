import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Confirmation({ bookingDate, bookingTime, number }) {
  const location = useLocation();
  return (
    <div className='text-center'>
      <h1>Your Reservation is Confirmed!</h1>
      <div>{location.state.bookingDate}</div>
      <h4>A confirmation message has been sent to your email.</h4>
      <h4>Thanks for dining with us!</h4>
    </div>
  );
}
