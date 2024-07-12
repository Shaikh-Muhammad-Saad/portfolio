import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';
import React from 'react';
import SEOWrapper from '@/src/components/SEOWrapper';
import contentClient from '../../contentful/client';
import Layout from '../../layout/Layout';
import ProjectsPaginatedContainer from '@/src/components/projects/projects-paginated-container';


const imagesList = [
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
  "https://i.pinimg.com/736x/5c/d4/c4/5cd4c4b82f304a8105f138efbbeb7938.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpN_4eSqOjkRUhRuNxb5MPvXoFbynICo1i7A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfW0rOyWkv0OqfwFuljuVldoXEj5VitoWK5w&s",
  "https://img.theweek.in/content/dam/week/news/2023/images/2023/7/10/cat-cats-with-facial-expressions-ai-image.jpg",
  "https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
  "https://www.newsinlevels.com/wp-content/uploads/2018/08/Depositphotos_454202308_L.jpg",
];



const ProjectDetails = ({ project }) => {
  const {
    startDate,
    projectText,
    category,
    title,
    resultText,
    client,
    bannerImage,
    challengeText,
    mobileImages,
  } = project ? project.fields : {};
  const text = documentToPlainTextString(projectText);
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
              <h3 className='title mb-30'>Project Information&rsquo;s</h3>
            </div>
            <div className='col-lg-8'>
              <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-1'>
                <div className='col'>
                  <h5>Client</h5>
                  <p className='sub-title mb-20'>{client ?? 'Confidential'}</p>
                </div>
                <div className='col'>
                  <h5>Category</h5>
                  <p className='sub-title mb-20'>{category ?? 'No Category'}</p>
                </div>
                <div className='col'>
                  <h5>Date</h5>
                  <p className='sub-title mb-20'>
                    {startDate ? moment(startDate).format('ll') : 'No Date'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {challengeText ? (
            <div className='row pt-50 pb-70 wow fadeInUp delay-0-2s'>
              <div className='col-lg-4'>
                <h3 className='title mb-30'>The Challenge</h3>
              </div>
              <div className='col-lg-8'>
                <div className='big-letter text'>
                  {documentToReactComponents(challengeText)}
                </div>
              </div>
            </div>
          ) : null}
          {projectText ? (
            <div className='row pt-50 pb-70 wow fadeInUp delay-0-2s'>
              <div className='col-lg-4'>
                <h3 className='title mb-30'>More About The Project</h3>
              </div>
              <div className='col-lg-8'>
                <div className='big-letter text'>
                  {documentToReactComponents(projectText)}
                </div>
              </div>
            </div>
          ) : null}



          {mobileImages ? (
            <>
              <div className='row'>
                {mobileImages?.map((m) => (
                  <div key={m?.sys?.id} className='col-6 col-lg-3'>
                    <div className='image mb-30 wow fadeInUp delay-0-2s'>
                      <img src={m?.fields?.file?.url} alt='Project' />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}




          <ProjectsPaginatedContainer imagesList={imagesList} />



          {resultText ? (
            <div className='row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s'>
              <div className='col-lg-4'>
                <h3 className='title mb-30'>The Results</h3>
              </div>
              <div className='col-lg-8'>
                <div className='text'>
                  {documentToReactComponents(resultText)}
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
  const res = await contentClient.getProjects();

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
  const res = await contentClient.getProjects({
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
      project: res.items[0],
      revalidate: 1,
    },
  };
};

export default ProjectDetails;
