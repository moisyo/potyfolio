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
    <picture>
      <img src={thumbnail} className='lazyload' />
    </picture>
  );
};
