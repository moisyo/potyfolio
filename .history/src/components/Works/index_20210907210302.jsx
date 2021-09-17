// import { SectionTitle, Gallery } from '../index';
import { SectionTitle } from '../SectionTitle';
import classes from 'src/components/Works/Works.module.scss';
import React, { useEffect, useState } from 'react';
import { Gallery } from '../Gallery/index';

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

export const Works = () => {
  return (
    <section id='works' className={`${classes.bg} p-8 bg-works-5`}>
      <SectionTitle title='制作実績' lead='WORKS' position='center' color='white' />
      <Gallery />
    </section>
  );
};
