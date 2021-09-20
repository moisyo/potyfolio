import classes from 'src/components/Skills/Skills.module.scss';

import { SectionTitle } from '../SectionTitle';

export const Contact = () => {
  return (
    <section id='contact' className='p-8'>
      <SectionTitle title='お仕事のご相談' lead='CONTACT' position='center' color='gray-700y' />
      <div className='lg:my-8 sm:my-4'>
        <h3 className='lg:text-base sm:text-sm'>mail</h3>
        <p className='lg:text-base sm:text-sm'>n.create39@gmail.com</p>
      </div>
    </section>
  );
};
