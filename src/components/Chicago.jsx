import React from 'react';
import image1 from '../assets/image/chicago/images.jpeg';
import image2 from '../assets/image/chicago/images2.jpeg';

export default function Chicago() {
  return (
    <section className='flex p-28 font-serif py-64'>
      <div className='flex flex-col w-1/2 max-md:flex-1'>
        <p className='text-[#495E57] font-bold text-5xl  '>Little Lemon</p>
        <p className='py-3 text-3xl text-[#EE9972]'>Chicago</p>
        <p className='text-2xl'>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.<br/><br/>
          To craft the menu, Mario relies on family recipes and his
          experience as a chef in Italy. Adrian does all the marketing for the
          restaurant and led the effort to expand the menu beyond classic
          Italian to incorporate additional cuisines from the Mediterranean
          region.
        </p>
      </div>
      <div className='w-1/2 pl-40 max-md:hidden'>
        <img src={image1} alt='image1' className='w-96 h-96 absolute'/>
        <img src={image2} alt='image2' className='w-96 h-96 relative bottom-10 left-60'/>
      </div>
    </section>
  );
}
