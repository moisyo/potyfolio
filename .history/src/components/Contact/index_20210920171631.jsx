import classes from 'src/components/Skills/Skills.module.scss';

import { SectionTitle } from '../SectionTitle';

export const Contact = () => {
  return (
    <section id='contact' className='p-8'>
      <SectionTitle title='お仕事のご相談' lead='CONTACT' position='center' color='gray-700y' />
      <div className='flex justify-center lg:my-8 sm:my-4'>
        <h3 className='lg:text-xl sm:text-sm text-text-green'>
          <a href='mailto:n.create39@gmail.com'>メールでのお問い合わせ</a>
        </h3>
      </div>
    </section>
  );
};
