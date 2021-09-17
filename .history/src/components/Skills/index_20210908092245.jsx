import classes from 'src/components/Skills/Skills.module.scss';

import { SectionTitle } from '../SectionTitle';

export const Skills = () => {
  return (
    <section id='skills' className='h-screen'>
      <SectionTitle title='スキル' lead='SKILLS' position='center' color='green' />
    </section>
  );
};
