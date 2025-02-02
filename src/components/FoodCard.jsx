import React from 'react';
import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { MdDeliveryDining } from 'react-icons/md';

export default function FoodCard({ name, description, imageSrc, price }) {
  return (
    <VStack className='w-96 bg-[#D9D9D9] rounded-t-lg font-serif m-5'>
      <Image src={imageSrc} alt={name} className='w-full h-80 rounded-t-lg' />
      <div
        className='flex flex-col justify-between h-52 p-3'
        spacing={4}
        p={4}
        alignItems='flex-start'
      >
        <div className='w-full flex items-center justify-between'>
          <Heading>{name}</Heading>
          <Text className='text-center text-[#EE9972] font-bold'>{price}</Text>
        </div>
        <Text>{description}</Text>
        <HStack className='font-bold'>
          <button>Order a Delivery</button>
          <MdDeliveryDining />
        </HStack>
      </div>
    </VStack>
  );
}
