import classes from 'src/components/Skills/Skills.module.scss';

import { SectionTitle } from '../SectionTitle';

export const Contact = () => {
  return (
    <section id='contact' className='lg:p-8 sm:p-4'>
      <SectionTitle title='お仕事のご相談' lead='CONTACT' position='center' color='gray-700y' />
      <div className='flex justify-center lg:my-8 sm:my-4'>
        <h3 className='lg:text-xl sm:text-base text-dark-green'>
          <a href='mailto:n.create39@gmail.com'>メールでのお問い合わせ</a>
        </h3>
      </div>
    </section>
  );
};
