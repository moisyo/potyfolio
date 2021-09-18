// CSSファイルのインポート classesやstylesといった名前がよくつけられる
import classes from 'src/components/About/About.module.css';

import { SectionTitle } from '../SectionTitle';

export const About = () => {
  return (
    <section id='about' className='h-screen'>
      <div className='flex h-full'>
        <div className={`h-full flex-1 flex items-center justify-center`}>
          <div className=''>
            <SectionTitle title='私について' lead='ABOUT' position='center' color='text-black' />
            <p>HP、LP制作を中心にデザインから実装、運用まで請け負います。</p>
          </div>
        </div>
        <div className={`${classes.bg} h-full flex-1 bg-center`}></div>
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
