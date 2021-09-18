// import classes from 'src/components/skills/Skills.module.scss';
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
    <section
      id='skills'
      className={`py-32 px-16 bg-works-1 bg-works-2 bg-works-3 bg-works-4 bg-skill-1`}
    >
      <SectionTitle title='スキル' lead='SKILLS' position='center' color='white' />
      <Gallery />
    </section>
  );
};
