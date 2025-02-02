import React from 'react';
import { Link } from 'react-router-dom';
import food from '../assets/image/food.jpg';

export default function Main() {
  return (
    <div className='bg-[#495E57] p-20 font-serif flex justify-around'>
      <div>
        <p className='text-[#F4CE14] text-6xl font-bold'>Little Lemon</p>
        <p className='text-white text-3xl pt-3 font-bold'>Chicago</p>
        <p className='text-white text-lg py-5'>
          We are family owned Mediterranean
          <br />
          restaurant, focused on traditional
          <br />
          recipes served with a modern twist.
        </p>
        <button className='bg-[#F4CE14] text-sm p-3 font-bold rounded-lg'>
          <Link to='/reservations'>Reserve a Table</Link>
        </button>
      </div>
      <div className='max-md:hidden'>
        <img src={food} alt='food' className='w-96 h-96 rounded-lg'/>
      </div>
    </div>
  );
}
