import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <div className='container min-h-full mx-auto shadow-lg rounded-lg hover:shadow-2xl transition duration-300 relative'>
      <picture>
        <img
          src={thumbnail}
          className='rounded-lg absolute top-0 left-0 w-auto h-auto m-w-in min-w-full min-h-full'
        />
      </picture>
    </div>
  );
};
