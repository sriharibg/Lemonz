import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const options = [
  ' ',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];
const occations = [' ', 'Anniversary', 'Birthday'];

export default function BookingForm() {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [number, setNumber] = useState('0');
  const [occation, setOccation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', {
      state: bookingDate,
      bookingTime,
      number,
      occation,
    });
    // setBookingDate('');
    // setBookingTime('');
    // setNumber('');
    // setOccation('');
  };

  return (
    <section className='m-auto p-5 flex flex-col space-between'>
      <span className='text-center text-4xl font-serif text-[#F4CE14] font-bold'>
        Little Lemon
      </span>
      <span className='text-center pb-5 text-2xl font-serif text-[#EDEFEE] font-bold'>
        FIND A TABLE
      </span>
      <form onSubmit={handleSubmit}>
        <fieldset className='m-auto flex flex-col w-3/12 italic h-2/4'>
          <label htmlFor='firstName' className='text-white pb-2'>
           First Name
          </label>
          <input
            type='text'
            placeholder='First Name'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='bg-slate-200 rounded-lg h-12 p-2'
          />
          <label htmlFor='LastName' className='text-white pb-2 pt-5'>
           Last Name
          </label>
          <input
            type='text'
            placeholder='Last Name'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='bg-slate-200 rounded-lg h-12 p-2'
          />
          <label htmlFor='email' className='text-white pb-2 pt-5'>
            Eamil Address
          </label>
          <input
            type='email'
            placeholder='Email Address'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-slate-200 rounded-lg h-12 p-2'
          />
          <label className='text-white pb-2' htmlFor='date'>
            Date:{' '}
          </label>
          <input
            type='date'
            id='date'
            className='bg-slate-200 rounded-lg h-12 p-2'
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
          <label className='text-white pb-2 pt-5' htmlFor='time'>
            Choose Time:{' '}
          </label>
          <select
            value={bookingTime}
            onChange={(e) => setBookingTime(e.target.value)}
            className='bg-slate-200 rounded-lg h-12 p-2'
          >
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor='guests' className='text-white pb-2 pt-5'>
            Number of Guests
          </label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='bg-slate-200 rounded-lg h-12 p-2'
          />
          {/* <label htmlFor='occasion' className='text-white pb-2 pt-5'>
            Occasion
          </label>
          <select
            value={occation}
            onChange={(e) => setOccation(e.target.value)}
            className='bg-slate-200 rounded-lg h-12 p-2'
          >
            {occations.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select> */}
          <button
            type='submit'
            className='mt-10 h-12 bg-[#F4CE14] rounded-lg font-bold'
          >
            Make Your Reservation
          </button>
        </fieldset>
      </form>
    </section>
  );
}
