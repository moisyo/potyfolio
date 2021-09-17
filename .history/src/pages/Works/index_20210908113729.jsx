// import { SectionTitle, Gallery } from '../index';
import { SectionTitle } from '../../components/SectionTitle';
import classes from 'src/pages/Works/Works.module.scss';
import React, { useEffect, useState } from 'react';
import { Cards } from 'src/pages/Cards';

export const Works = ({ blog }) => {
  return (
    <section id='works' className={`${classes.bg} p-8 bg-works-5 min-h-screen py-32 px-10`}>
      <SectionTitle title='制作実績' lead='WORKS' position='center' color='white' />
      <Cards />
    </section>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  console.log(data);

  return {
    props: {
      blog: data.contents,
    },
  };
};
