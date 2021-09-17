// import { SectionTitle, Gallery } from '../index';
import { SectionTitle } from '../SectionTitle';
import classes from 'src/components/Works/Works.module.scss';
import React, { useEffect, useState } from 'react';
import { Cards } from 'src/components/Cards';

export const Works = () => {
  return (
    <section id='works' className={`${classes.bg} p-8 bg-works-5 min-h-screen py-32 px-10`}>
      <SectionTitle title='制作実績' lead='WORKS' position='center' color='white' />
      <Cards />
    </section>
  );
};
