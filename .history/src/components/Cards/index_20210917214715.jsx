import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const galleryName = [];

export const Cards = ({ id, title, publishedAt, thumbnail, body }) => {
  const values = [
    { id: 1, text: 'HP' },
    { id: 2, text: 'LP' },
    { id: 3, text: 'illustrator' },
    { id: 4, text: 'photoshop' },
    { id: 5, text: 'premier' },
  ];
  const [isActive, setIsActive] = useState();
  // console.log(blog);

  return (
    <div className='relative container h-full mx-auto shadow-lg rounded-lg hover:shadow-2xl transition duration-300'>
      {/* <div className='p-10' style='background-image: url("");'></div> */}
      <picture className='relative'>
        <Image
          src={thumbnail}
          className='rounded-lg m-w-full h-full block'
          layout='fill'
          objectFit='cover'
        />
      </picture>
    </div>
  );
};
