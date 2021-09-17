// CSSファイルのインポート classesやstylesといった名前がよくつけられる
import classes from 'src/components/About/About.module.css';

import { SectionTitle } from '../SectionTitle';

export const About = () => {
  return (
    <section id='about' className='py-20 h-screen'>
      <div className='flex h-full'>
        <div className={`h-full flex-1`}>
          <SectionTitle title='私について' lead='ABOUT' position='center' />
        </div>
        <div className={`${classes.bg} h-full flex-1`}></div>
      </div>
      {/* <canvas class='webgl'></canvas> */}
      {/* <div>
        {ITEMS.map((item) => {
          return (
            <div className='parent1'>
              <p className='text-left whitespace-pre-wrap'>{item.text}</p>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};
