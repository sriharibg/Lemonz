import React from 'react';
import star from '../assets/image/testimonial/star.png';

export default function ReviewCard({ imageSrc, name, testimonial }) {
  return (
    <div className='w-80 flex'>
      <div className='p-10'>
        <img src={imageSrc} alt={name} className='rounded-full'/>
        <div className='flex flex-row pt-3 justify-center'>
          <img src={star} alt='star' className='w-5 h-5'/>
          <img src={star} alt='star' className='w-5 h-5'/>
          <img src={star} alt='star' className='w-5 h-5'/>
          <img src={star} alt='star' className='w-5 h-5'/>
          <img src={star} alt='star' className='w-5 h-5'/>
        </div>
        <p className='pt-3 font-bold text-2xl flex justify-center'>{name}</p>
        <p className='pt-2 italic'>{testimonial}</p>
      </div>
    </div>
  );
}
