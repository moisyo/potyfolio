import { Header } from '../components/Header';
import { About } from '../components/About';
import { Skills } from 'src/components/Skills';
import { Works } from 'src/components/Works';
import { Contact } from 'src/components/Contact';
import { Footer } from 'src/components/Footer';
import { client } from 'libs/client';
import Link from 'next/link';
import Moment from 'react-moment';
import styles from 'src/styles/Home.module.scss';

const Home = ({ blog }) => {
  console.log(blog);
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグ（sectionタグ推奨？）でwrapされている必要がある。
    <section>
      {/* Headerを読み込む */}
      <Header />
      <About />
      <div class='flex justify-center p-5 bg-black'>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className='mb-4 last:mb-0'>
              <Link href={`/blog/${blog.id}`}>
                <a className='text-white'>
                  <Moment format='YYYY/MM/DD' className='mr-4'>
                    {blog.updatedAt}
                  </Moment>
                  {blog.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <Skills /> */}
      <Works />
      <Contact />
      <Footer />
    </section>
  );
};
export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
