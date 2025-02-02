import React, { useRef, useState } from 'react';
import Rating from '../components/Rating';

export default function WriteReview() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefualt();
    setText('');
  };

  return (
    <form
      method='post'
      onSubmit={handleSubmit}
      className='flex flex-col justify-around box-border border-2 w-1/2 h-96 m-auto'
    >
      <Rating />
      <textarea
        className='text-left'
        name='review'
        autoFocus={true}
        rows={12}
        cols={80}
        placeholder='A few things to consider in your review'
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className='w-40 m-auto bg-[#F4CE14] text-sm p-3 font-bold rounded-lg'>Post Review</button>
    </form>
  );
}
