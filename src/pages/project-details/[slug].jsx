import React from 'react';
import SEOWrapper from '@/src/components/SEOWrapper';
import Layout from '../../layout/Layout';
import ProjectsPaginatedContainer from '@/src/components/projects/projects-paginated-container';
import { projectDetailsList } from '@/src/DB/projects';



const ProjectDetails = ({ project }) => {


  return (
    <Layout header={2} footer={4}>
      <SEOWrapper
        title={project?.name}
        description={project?.name?.length > 160 ? name?.slice(0, 160) : project?.name}
        image={project?.bannerImage}
      />

      <section
        className='page-banner pt-100 rpt-150 pb-75 rel z-1'
        style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}
      >
        <div className='container container-1290'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s'>
                {project?.name ?? "Project Name"}
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
              src={project?.bannerImage}
              alt='Project'
            />
          </div>
        </div>
      </div>

      <section className='project-details-area pt-80 rel z-1'>
        <div className='container container-1290'>
          <div className='row pb-35 wow fadeInUp delay-0-2s'>
            <div className='col-lg-4'>
              <h3 className='title mb-30'>Project Information</h3>
            </div>

            <div className=''>
              <div className=''>
                <p className='sub-title mb-0'>{project?.info}</p>
                <a className='sub-title mb-0' href={project?.liveURL} target="_blank" rel="noopener noreferrer" style={{ color: "#55E6A5" }}>
                  {project?.liveURLText}

                  <svg
                    width="20px"
                    height="20px"
                    className="ms-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="#55E6A5"
                        strokeWidth="1.152"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>

                </a>
              </div>

              {/* <div className=''>
                  <h5>Client</h5>
                  <p className='sub-title mb-20'>{'Confidential'}</p>
                </div>

                <div className=''>
                  <h5>Category</h5>
                  <p className='sub-title mb-20'>Full Stack Development</p>
                </div> */}

            </div>
          </div>

          <hr />

          <div className='row pt-50 wow fadeInUp delay-0-2s'>
            <div className='col-lg-4'>
              <h3 className='title mb-30'>More About The Project</h3>
            </div>
            <div className='col-lg-8'>
              <div className='big-letter text'>
                {project?.description}
              </div>
            </div>
          </div>

          {project?.images.length
            ? <ProjectsPaginatedContainer imagesList={project?.images ?? []} />
            : <div style={{ marginBottom: "400px" }} />}

          <hr />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = () => {
  const projects = projectDetailsList;

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {

  const project = projectDetailsList.find((project) => {
    if (params.slug === project.slug) return project;
  })

  if (!project) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: project,

    },
  };
};

export default ProjectDetails;
