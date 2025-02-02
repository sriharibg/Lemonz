import React from 'react';
import restaurant from '../assets/image/restaurant.jpg';

export default function Footer() {
  return (
    <section className='text-center text-sm p-10 bg-[#495E57] text-white font-bold'>
      <div className='flex justify-around max-md:flex-col'>
        <img src={restaurant} alt='restaurant' className='w-56 h-72' />
        <ul className='py-20 flex flex-col justify-around'>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
        </ul>
        <div className='flex items-center max-md:justify-center'>
          Little Lemon <br />
          331 E Chicago <br />
          LaSalle Street Chicago,
          <br />
          Illinois 60602 <br />
          USA
        </div>
        <div>
          <ul className='py-20 flex flex-col justify-around'>
            <li className='pb-3'>Social Media</li>
            <li className='pb-3'>
              <a
                href='https://www.facebook.com/littlelemon'
                target='_blank'
                rel='external'
              >
                Facebook
              </a>
            </li>
            <li className='pb-3'>
  
              <a
                href='https://www.instagram.com/littlelemon'
                target='_blank'
                rel='external'
              >
                Instagram
              </a>
            </li>
            <li>
  
              <a
                href='https://twitter.com/littlelemon'
                target='_blank'
                rel='external'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>2013-2023 © Little Lemon. All Rights Reserved. </p>
    </section>
  );
}
