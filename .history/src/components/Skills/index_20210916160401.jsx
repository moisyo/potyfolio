import classes from 'src/components/skills/Skills.module.scss';
import React, { useEffect, useState } from 'react';
import { Gallery } from '../Gallery/index';
import { SectionTitle } from '../SectionTitle';

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove('active');
//   });
// }
export const Skills = () => {
  return (
    <section id='skills' className='p-8 bg-works-2'>
      <SectionTitle title='スキル' lead='SKILLS' position='center' color='green' />
      <Gallery />
    </section>
  );
};
