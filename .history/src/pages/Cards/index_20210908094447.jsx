import React, { useEffect, useState } from 'react';
import classes from 'src/components/Works/Works.module.scss';

const galleryName = [];

export const Gallery = (props) => {
  const values = [
    { id: 1, text: 'HP' },
    { id: 2, text: 'LP' },
    { id: 3, text: 'illustrator' },
    { id: 4, text: 'photoshop' },
    { id: 5, text: 'premier' },
  ];
  const [isActive, setIsActive] = useState();

  return (
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 '>
      <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
        <img
          src='https://images.unsplash.com/photo-1627751476653-e954179b174a'
          alt=''
          class='rounded-t-lg w-full'
        />
        <div class='p-6'>
          <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
            This is Amazing for people to visit.
          </h1>
          <p class='text-gray-700 my-2 hover-text-900 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
          </p>
        </div>
      </div>
      <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
        <img
          src='https://images.unsplash.com/photo-1572431447238-425af66a273b'
          alt=''
          class='rounded-t-lg w-full'
        />
        <div class='p-6'>
          <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
            This is Amazing for people to visit.
          </h1>
          <p class='text-gray-700 my-2 hover-text-900 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
          </p>
        </div>
      </div>
      <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
        <img
          src='https://images.unsplash.com/photo-1540202404-1b927e27fa8b'
          alt=''
          class='rounded-t-lg w-full'
        />
        <div class='p-6'>
          <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
            This is Amazing for people to visit.
          </h1>
          <p class='text-gray-700 my-2 hover-text-900 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
          </p>
        </div>
      </div>
      <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
        <img
          src='https://images.unsplash.com/photo-1506790409786-287062b21cfe'
          alt=''
          class='rounded-t-lg w-full'
        />
        <div class='p-6'>
          <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
            This is Amazing for people to visit.
          </h1>
          <p class='text-gray-700 my-2 hover-text-900 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
          </p>
        </div>
      </div>
      <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
        <img
          src='https://images.unsplash.com/photo-1505881502353-a1986add3762'
          alt=''
          class='rounded-t-lg w-full'
        />
        <div class='p-6'>
          <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
            This is Amazing for people to visit.
          </h1>
          <p class='text-gray-700 my-2 hover-text-900 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
          </p>
        </div>
      </div>
      <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
        <img
          src='https://images.unsplash.com/photo-1544473244-f6895e69ad8b'
          alt=''
          class='rounded-t-lg w-full'
        />
        <div class='p-6'>
          <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
            This is Amazing for people to visit.
          </h1>
          <p class='text-gray-700 my-2 hover-text-900 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
          </p>
        </div>
      </div>
    </div>
  );
};
