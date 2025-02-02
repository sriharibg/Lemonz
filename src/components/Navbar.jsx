import React from 'react';
import logo from '../assets/image/logo-navbar.png';
import { Link } from 'react-router-dom';
import {LiaBarsSolid} from 'react-icons/lia';

export default function Navbar() {
  // const [show, setShow]
  return (
    <nav className='bg-[#FFFFFF] flex justify-between pl-20 m-auto font-bold sticky top-0'>
      <Link to='/'>
        <img src={logo} className='w-60'/>
      </Link>
      <button className='self-center pr-5 md:hidden'>
        <LiaBarsSolid className='self-center w-12 h-12' />
      </button>
      <div className='flex w-full justify-around max-md:hidden'>
        <Link to='/about' className='self-center'>
          About
        </Link>
        <Link to='/menu' className='self-center'>
          Menu
        </Link>
        <Link to='/reservations' className='self-center'>
          Reservations
        </Link>
        <Link to='/orderonline' className='self-center'>
          Order Online
        </Link>
        <Link to='/writereview' className='self-center'>
         Write a Review
        </Link>
      </div>
    </nav>
  );
}
