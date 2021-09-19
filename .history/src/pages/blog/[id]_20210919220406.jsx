import { client } from 'libs/client';
import Moment from 'react-moment';
import styles from 'src/pages/blog/[id].module.scss';
import { PageHead } from 'src/components/PageHead';
import { BlogHeader } from 'src/components/BlogHeader';
import { Footer } from 'src/components/Footer';

export default function BlogId({ blog }) {
  // console.log(blog.category);
  return (
    <div>
      <PageHead />
      <BlogHeader />
      <main className={`${styles.main} lg:min-h-screen`}>
        <div className='lg:px-6 lg:py-10 sm:px-6 sm:py-10'>
          <h2 className={`{styles.title} text-3xl font-bold mb-6 text-gray-700`}>{blog.title}</h2>
          <Moment format='YYYY-MM-DD' className='mb-6'>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
          </Moment>
          {/* <p className='category'>{blog.category && `${blog.category.name}`}</p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={`{styles.post} mt-6 text-gray-700`}
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
