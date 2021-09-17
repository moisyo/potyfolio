// import { SectionTitle } from '../SectionTitle';
import { client } from 'libs/client';

export const Updates = () => {
  return (
    <section id='updates' className='h-screen'>
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
      {/* <SectionTitle title='私について' lead='ABOUT' position='center' /> */}
    </section>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
