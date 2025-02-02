import React from 'react';
import ReviewCard from './ReviewCard';

const customers = [
  {
    name: 'Jenny H.',
    testimonial:
      '"I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"',
    getImageSrc: () => require('../assets/image/testimonial/jennyhudson.jpeg'),
  },
  {
    name: 'John D.',
    testimonial:
      '"I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"',
    getImageSrc: () => require('../assets/image/testimonial/johndoe.jpeg'),
  },
  {
    name: 'Nina R.',
    testimonial:
      '"I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful."',
    getImageSrc: () => require('../assets/image/testimonial/ninarobobert.jpeg'),
  },
  {
    name: 'Rick Y.',
    testimonial:
      '"The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends."',
    getImageSrc: () => require('../assets/image/testimonial/rickyoung.jpeg'),
  },
];
export default function CustomersSay() {
  return (
    <div className='p-20 bg-[#495E57]'>
      <p className='pb-20 text-5xl text-center text-[#F4CE14] font-bold'>What Our Customers Say!</p>
      <div className='flex flex-row justify-around bg-[#FBDABB] max-md:flex-col'>
      {customers.map((customer) => (
        <ReviewCard
          name={customer.name}
          testimonial={customer.testimonial}
          imageSrc={customer.getImageSrc()}
        />
      ))}
      </div>
    </div>
  );
}
