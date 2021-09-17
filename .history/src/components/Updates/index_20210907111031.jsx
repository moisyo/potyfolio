// import { SectionTitle } from '../SectionTitle';

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
