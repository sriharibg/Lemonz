import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating() {
  const [rate, setRate] = useState();
  return (
    <div className='flex flex-row'>
      {[...Array(5)].map((item, index) => {
        const givenRating = index ;
        return (
          <label >
            <input
              type='radio'
              className='hidden'
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            ></input>
              <FaStar
              className='w-7 h-7'
                color={
                  givenRating < rate || givenRating === rate
                    ? 'rgb(244,206,20)'
                    : 'rgb(192,192,192)'
                }
              />
          </label>
        );
      })}
    </div>
  );
}
