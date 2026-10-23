import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';
import Link from 'next/link';
import { LuArrowLeft, LuCalendar, LuTag } from 'react-icons/lu';

import styles from '@/src/components/blog/Blog.module.css';

import SEOWrapper from '@/src/components/SEOWrapper';
import Img from '@/src/components/ui/Img';
import contentClient from '@/src/contentful/client';
import Layout from '@/src/layout/Layout';

const sections = [
  ['intro', 'Introduction'],
  ['content', null],
  ['conclusion', 'Conclusion'],
  ['references', 'References'],
];

const BlogDetails = ({ blog }) => {
  const fields = blog?.fields ?? {};
  const { intro, title, bannerImage } = fields;
  const text = intro ? documentToPlainTextString(intro) : '';
  const cover = bannerImage?.fields?.file?.url;

  return (
    <Layout>
      <SEOWrapper
        title={title}
        description={text.length > 160 ? `${text.slice(0, 157)}...` : text}
        image={cover ? `https:${cover}` : undefined}
        type='article'
      />

      <header className={styles.header}>
        <div className='container'>
          <Link href='/blog' className={styles.back}>
            <LuArrowLeft /> All articles
          </Link>
          <h1 className={styles.pageTitle}>{title}</h1>
          <div className={styles.articleMeta}>
            <span>
              <LuCalendar /> {moment(blog?.sys?.updatedAt).format('ll')}
            </span>
            <span>
              <LuTag /> Web Development
            </span>
          </div>
        </div>
      </header>

      {cover ? (
        <div className='container'>
          <div className={styles.cover}>
            <Img
              src={cover}
              alt={title}
              widths={[960, 1440, 1920]}
              sizes='(max-width: 1264px) 100vw, 1200px'
              priority
            />
          </div>
        </div>
      ) : null}

      <article className={`container ${styles.article}`}>
        {sections.map(([key, heading]) =>
          fields[key] ? (
            <section key={key} className={styles.block}>
              {heading ? (
                <h2 className={styles.blockTitle}>{heading}</h2>
              ) : null}
              <div className='prose'>
                {documentToReactComponents(fields[key])}
              </div>
            </section>
          ) : null
        )}
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await contentClient.getBlogs();

  return {
    paths: res.items.map((blog) => ({ params: { slug: blog.fields.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await contentClient.getBlogs({
    'fields.slug': params.slug, // Gets only one entry because slug is a unique value.
  });

  if (!res.items.length) {
    return { redirect: { destination: '/', permanent: false } };
  }

  return {
    props: { blog: res.items[0] },
    revalidate: 360,
  };
};

export default BlogDetails;
