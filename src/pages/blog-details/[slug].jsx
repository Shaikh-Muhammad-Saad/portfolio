import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';
import React from 'react';

import SEOWrapper from '@/src/components/SEOWrapper';

import contentClient from '../../contentful/client';
import Layout from '../../layout/Layout';
const ProjectDetails = ({ blog }) => {
  const { intro, title, bannerImage, content, conclusion, references } = blog
    ? blog.fields
    : {};
  const text = documentToPlainTextString(intro);
  return (
    <Layout header={2} footer={4}>
      <SEOWrapper
        title={title}
        description={text?.length > 160 ? text?.slice(0, 160) : text}
        image={bannerImage?.fields?.file?.url}
      />
      <section
        className='page-banner pt-210 rpt-150 pb-75 rel z-1'
        style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}
      >
        <div className='container container-1290'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s'>
                {title}
                <img
                  className='mxw-10 leaf'
                  src='/assets/images/banner/leaf-small.png'
                  alt='Leaf'
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {bannerImage ? (
        <div className='project-details-image rel z-1'>
          <div className='container-fluid'>
            <div className='image wow fadeInUp delay-0-2s'>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
                src={bannerImage?.fields?.file?.url}
                alt='Project'
              />
            </div>
          </div>
        </div>
      ) : null}
      <section className='project-details-area pt-80 rel z-1'>
        <div className='container container-1290'>
          <div className='row pb-35 wow fadeInUp delay-0-2s'>
            <div className='col-lg-4'>
              <h3 className='title mb-30'>Article Information&rsquo;s</h3>
            </div>
            <div className='col-lg-8'>
              <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-1'>
                <div className='col'>
                  <h5>Author</h5>
                  <p className='sub-title mb-20'>Usama Irfan</p>
                </div>
                <div className='col'>
                  <h5>Category</h5>
                  <p className='sub-title mb-20'>Web Development</p>
                </div>
                <div className='col'>
                  <h5>Date</h5>
                  <p className='sub-title mb-20'>
                    {moment(blog?.sys?.updatedAt).format('ll')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {intro ? (
            <div className='row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s'>
              <div className='col-lg-4'>
                <h3 className='title mb-30'>Introduction</h3>
              </div>
              <div className='col-lg-8'>
                <div className='text'>{documentToReactComponents(intro)}</div>
              </div>
            </div>
          ) : null}

          {content ? (
            <div className=' blog-content row pt-50 pb-70 mx-auto col-8 wow fadeInUp delay-0-2s'>
              <div className='col-lg-12'>
                <div className='big-letter text'>
                  {documentToReactComponents(content)}
                </div>
              </div>
            </div>
          ) : null}

          {conclusion ? (
            <div className='row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s'>
              <div className='col-lg-4'>
                <h3 className='title mb-30'>Conclusion</h3>
              </div>
              <div className='col-lg-8'>
                <div className='text'>
                  {documentToReactComponents(conclusion)}
                </div>
              </div>
            </div>
          ) : null}

          {references ? (
            <div className='row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s'>
              <div className='col-lg-4'>
                <h3 className='title mb-30'>References</h3>
              </div>
              <div className='col-lg-8'>
                <div className='text'>
                  {documentToReactComponents(references)}
                </div>
              </div>
            </div>
          ) : null}
          <hr />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await contentClient.getBlogs();

  const paths = res.items.map((project) => ({
    params: {
      slug: project.fields.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await contentClient.getBlogs({
    'fields.slug': params.slug, // Gets only one recipe because slug is a unique value.
  });

  if (!res.items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: res.items[0],
      revalidate: 1,
    },
  };
};

export default ProjectDetails;
