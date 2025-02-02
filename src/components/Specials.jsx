import React from 'react';
import FoodCard from './FoodCard';

const specials = [
  {
    name: 'Brischetta',
    price: '$12.99',
    description:
      'Our Bruschetta ia made from homemade grilled bread that has beed smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
    getImageSrc: () => require('../assets/image/special/bruschetta.jpeg'),
  },
  {
    name: 'Greek Salad',
    price: '$17.99',
    description:
      'The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
    getImageSrc: () => require('../assets/image/special/greeksalad.jpg'),
  },
  {
    name: 'Lemon Cake',
    price: '$7.99',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require('../assets/image/special/lemoncake.jpg'),
  },
];

export default function Specials() {
  return (
    <div className='p-10 bg-[#EDEFEE]'>
      <p className='pb-10 text-5xl text-center font-bold'>This weeks specials!</p>
      <div className='flex justify-around max-md:block'>
        {specials.map((special) => (
          <FoodCard
            key={special.title}
            name={special.name}
            description={special.description}
            imageSrc={special.getImageSrc()}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
}
