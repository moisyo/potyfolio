import { Header } from '../components/Header';
import { About } from '../components/About';
import { Updates } from 'src/components/Updates';
import { Skills } from 'src/components/Skills';
import { Works } from 'src/components/Works';
import { Footer } from 'src/components/Footer';
import Link from 'next/link';
import styles from 'src/styles/Home.module.scss';

const Home = ({ blog }) => {
  console.log(blog);
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグ（sectionタグ推奨？）でwrapされている必要がある。
    <section>
      {/* Headerを読み込む */}
      <Header />
      <About />
      <Updates />
      <Skills />
      <Works />
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
