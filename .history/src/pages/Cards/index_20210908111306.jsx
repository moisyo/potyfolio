import React, { useEffect, useState } from 'react';
import { client } from 'libs/client';
import Link from 'next/link';

const galleryName = [];

export const Cards = ({ blog }) => {
  const values = [
    { id: 1, text: 'HP' },
    { id: 2, text: 'LP' },
    { id: 3, text: 'illustrator' },
    { id: 4, text: 'photoshop' },
    { id: 5, text: 'premier' },
  ];
  const [isActive, setIsActive] = useState();
  // console.log({ blog });

  return (
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 '>
      {/* {blog.map((blog) => (
        <div
          key={blog.id}
          className='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'
        >
          <Link href={`/blog/${blog.id}`}>
            <a className='text-white'>
              <picture>
                <img src={`${blog.ogimg.url}?w=670`} className='rounded-t-lg w-full' />
              </picture>
            </a>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
