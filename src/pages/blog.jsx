import PageBanner from '@/src/components/PageBanner';
import Layout from '@/src/layout/Layout';

import BlogList from '../components/blog/BlogList';
import SEOWrapper from '../components/SEOWrapper';
import contentClient from '../contentful/client';

const Blog = ({ blogs }) => {
  return (
    <Layout header={2}>
      <SEOWrapper />
      {/* Page Banner Start */}
      <PageBanner pageName='Code by day, script by night.' linkText='Blog' />
      {/* Page Banner End */}
      {/* Blog Page Area start */}
      <section className='blog-page-area py-130 rpy-100 rel z-1'>
        <div className='container container-1290'>
          <BlogList blogs={blogs} />
        </div>
      </section>
      {/* Blog Page Area end */}
      {/* footer area start */}
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await contentClient.getBlogs();

  response.items.forEach((i) => delete i.fields?.related);

  return {
    props: {
      blogs: response.items,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 360, // In seconds
  };
}

export default Blog;
