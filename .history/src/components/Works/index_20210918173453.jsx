import { Cards } from 'src/components/Cards';
import React, { useEffect, useState } from 'react';
import classes from 'src/components/Works/Works.module.scss';
import { SectionTitle } from '../SectionTitle';

export const Works = () => {
  return (
    <section id='works' className={`${classes.bg} p-8 bg-works-5 min-h-screen py-32 px-10`}>
      <SectionTitle title='制作実績' lead='WORKS' position='center' color='white' />
    </section>
  );
};
