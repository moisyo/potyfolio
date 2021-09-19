import Link from 'next/link';
import Moment from 'react-moment';
import styles from 'src/styles/Home.module.scss';
import { Header } from '../components/Header';
import { PageHead } from 'src/components/PageHead';
import { SectionTitle } from 'src/components/SectionTitle';
import { About } from '../components/About';
import { Skills } from 'src/components/Skills';
import { Works } from 'src/components/Works';
import { Cards } from '../components/Cards';
import { Contact } from 'src/components/Contact';
import { Footer } from 'src/components/Footer';
import { client } from 'libs/client';

const Home = ({ blog }) => {
  console.log(blog);
  const range = (num) => [...Array(num)].map(() => {});

  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグ（sectionタグ推奨？）でwrapされている必要がある。
    <section>
      {/* Headerを読み込む */}
      <Header />
      <PageHead />
      <About />
      {/* <div class='flex justify-center p-5 bg-black'>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className='mb-4 last:mb-0'>
              <Link href={`/blog/${blog.id}`}>
                <a className='text-white'>
                  {/* <picture>
                    <img src={`${blog.ogimg.url}?w=670`} className='lazyload' />
                  </picture> */}
      {/* <Moment format='YYYY/MM/DD' className='mr-4'>
                    {blog.updatedAt}
                  </Moment>
                  {blog.title}
                </a>
              </Link>
            </li>
          ))}
        // </ul> *}
      {/* </div> } */}
      <Skills />
      <div
        id='works'
        className='bg-bg-green lg:py-32 md:py-24 sm:py-16 lg:px-20 tab:px-12 md:px-10 sm:px-4'
      >
        <SectionTitle title='制作実績' lead='WORKS' position='center' color='white' />
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl md:gap-x-15 xl-grid-cols-4 gap-y-10 gap-x-6 mx-auto mt-10'>
          {blog.map((blog) => (
            <Link href={`/blog/${blog.id}`}>
              <a className='text-white block'>
                <Cards
                  id={blog.id}
                  title={blog.title}
                  subTitle={blog.subTitle}
                  thumbnail={blog.ogimg.url}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </section>
  );
};
export default Home;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    limit: '3',
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
