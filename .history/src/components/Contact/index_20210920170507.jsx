import classes from 'src/components/Skills/Skills.module.scss';

import { SectionTitle } from '../SectionTitle';

export const Contact = () => {
  return (
    <section id='contact' className='p-8'>
      <SectionTitle title='お仕事のご相談' lead='CONTACT' position='center' color='gray-700y' />
      <div>
        <h3>mail</h3>
        <p>n-create@gmail.com</p>
      </div>
    </section>
  );
};
