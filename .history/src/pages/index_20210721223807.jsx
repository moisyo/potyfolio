import { Header } from '../components/Header';
import { About } from '../components/About';
import { Skills } from 'src/components/Skills';
import { client } from 'libs/client';
import Link from 'next/link';

const Home = ({ blog }) => {
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグ（sectionタグ推奨？）でwrapされている必要がある。
    <section>
      {/* Headerを読み込む */}
      <Header />

      <About />
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Skills />
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
