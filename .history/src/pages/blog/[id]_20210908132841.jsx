import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { client } from 'libs/client';
import Moment from 'react-moment';
import styles from 'src/pages/blog/[id].module.scss';

export default function BlogId({ blog }) {
  // console.log(blog.category);
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className=''>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <p className='category'>{blog.category && `${blog.category.name}`}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={styles.post}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
