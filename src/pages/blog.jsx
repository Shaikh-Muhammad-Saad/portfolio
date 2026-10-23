import styles from '../components/blog/Blog.module.css';

import BlogList from '../components/blog/BlogList';
import SEOWrapper from '../components/SEOWrapper';
import contentClient from '../contentful/client';
import Layout from '../layout/Layout';

const Blog = ({ blogs }) => (
  <Layout>
    <SEOWrapper title='Blog' />
    <header className={styles.header}>
      <div className='container'>
        <span className='eyebrow'>Blog</span>
        <h1 className={styles.pageTitle}>
          Code by day, <span className='gradient-text'>script by night.</span>
        </h1>
      </div>
    </header>
    <section className={styles.list}>
      <div className='container'>
        <BlogList blogs={blogs} />
      </div>
    </section>
  </Layout>
);

export async function getStaticProps() {
  const response = await contentClient.getBlogs();

  response.items.forEach((i) => delete i.fields?.related);

  return {
    props: {
      blogs: response.items,
    },
    revalidate: 360, // In seconds
  };
}

export default Blog;
