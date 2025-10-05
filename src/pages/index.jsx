import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';

import ContactFormSvg from '@/src/assets/svgs/contact.svg';

import ContactForm1 from '../components/ContactForm1';
// import ProjectsSlider from '../components/projects/ProjectsSlider';
import SEOWrapper from '../components/SEOWrapper';
import WorkVerticalTimeline from '../components/VerticalTimeline';
import contentClient from '../contentful/client';
import Layout from '../layout/Layout';

const Counter = dynamic(() => import('../components/Counter'), {
  ssr: false,
});

const ProjectsSlider = dynamic(() => import('../components/projects/ProjectsSlider'), { ssr: true });

const techList = [
  'Javascript',
  'Typescript',
  'React Js',
  'Next Js',
  'Node Js',
  'Express Js',
  'Nest Js',
  'Nest Js',
  'MongoDB',
  'Rest APIs',
  'Docker',
  'Ubuntu',
  'NGINX',
  'material UI',
  'tailwind',
  'Sass',
  'HTML',
  'CSS',
];

const techImages = [
  {
    src: 'assets/images/skills/react.png',
    alt: 'Skill icon',
    title: 'React.js',
  },
  {
    src: 'assets/images/skills/next.png',
    alt: 'Skill icon',
    title: 'Next.js',
  },
  {
    src: 'assets/images/skills/express.png',
    alt: 'Skill icon',
    title: 'Express.js',
  },
  {
    src: 'assets/images/skills/nestjs.png',
    alt: 'Skill icon',
    title: 'Nest.js',
  },
  {
    src: 'assets/images/skills/node.png',
    alt: 'Skill icon',
    title: 'Node.js',
  },
  {
    src: 'assets/images/skills/mongodb.png',
    alt: 'Skill icon',
    title: 'MongoDB',
  },
  {
    src: 'assets/images/skills/postgresql.png',
    alt: 'Skill icon',
    title: 'PostgreSQL',
  },
  {
    src: 'assets/images/skills/docker.png',
    alt: 'Skill icon',
    title: 'Docker',
  },
  {
    src: 'assets/images/skills/vercel.png',
    alt: 'Skill icon',
    title: 'Vercel',
  },
  {
    src: 'assets/images/skills/aws.png',
    alt: 'Skill icon',
    title: 'AWS EC2',
  },
  {
    src: 'assets/images/skills/cloudflare.png',
    alt: 'Skill icon',
    title: 'Cloudflare',
  },
  {
    src: 'assets/images/skills/prisma.png',
    alt: 'Skill icon',
    title: 'Prisma',
  },
  {
    src: 'assets/images/skills/ubuntu.png',
    alt: 'Skill icon',
    title: 'Ubuntu',
  },
  {
    src: 'assets/images/skills/nginx.png',
    alt: 'Skill icon',
    title: 'NGINX',
  },
  {
    src: 'assets/images/skills/firebase.png',
    alt: 'Skill icon',
    title: 'Firebase',
  },
  {
    src: 'assets/images/skills/mongoose.png',
    alt: 'Skill icon',
    title: 'Mongoose',
  },
  {
    src: 'assets/images/skills/tailwind.png',
    alt: 'Skill icon',
    title: 'Tailwind',
  },
  {
    src: 'assets/images/skills/materialUI.png',
    alt: 'Skill icon',
    title: 'Material UI',
  },
  {
    src: 'assets/images/skills/typescript.png',
    alt: 'Skill icon',
    title: 'Typescript',
  },
  {
    src: 'assets/images/skills/skill4.png',
    alt: 'Skill icon',
    title: 'Javascript',
  },
];



const Index4 = ({ workHistory }) => {
  return (
    <Layout header={2} footer={4}>
      <SEOWrapper />
      {/* Hero Section Start */}
      <section
        id='home'
        className='hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1'
        style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}
      >
        <div className='container'>
          <h1 className='hero-title  wow fadeInUp delay-0-2s'>
            Shaikh Muhammad Saad
            <br />
            Software Engineer
          </h1>
        </div>
      </section>
      {/* Hero Section End */}




      {/* About Us Area start */}
      <section id='about' className='about-area rel z-1'>
        <div className='container-fluid'>
          <div className='about-four-wrap py-50 rpy-100'>
            <div className='container container-1290 ssss'>
              <div className='row gap-70 align-items-center'>
                <div className='col-lg-6'>
                  <div className='about-four-content rmb-55 wow fadeInUp delay-0-2s'>
                    <div className='section-title mb-35'>
                      <span className='sub-title mb-15'>About Me</span>
                      <h3>Professional &amp; Experienced Software Engineer</h3>
                    </div>
                    <p>
                      A professional Software Engineer with 5 years of
                      experience, proficient in cutting-edge technologies such
                      as the MERN stack and PERN stack. With a proven track record in both web and mobile
                      development, I specialize in delivering robust, scalable,
                      and efficient digital solutions. As an industry-savvy
                      professional, I stay ahead of tech trends, ensuring my
                      projects enhance user experience and fulfill business
                      objectives. Expert in JavaScript-based technologies and
                      problem-solving, I ensure my work drives digital
                      innovation.
                    </p>
                    <div className='list-style-three pt-25 pb-20'>
                      <li>Web Development</li>
                      <li>Backend Development</li>
                      <li>UI/UX Designing</li>
                      <li>SQL / NoSQL Database</li>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='about-four-image wow fadeInUp delay-0-4s'>
                    <img
                      src='/assets/images/about/me.png'
                      alt='Me'
                      loading="lazy" // Lazy loading enabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}



      {/* Service Box start */}
      <section className='service-section pt-130 rpt-100 pb-100 rpb-70'></section>
      {/* Service Box end */}


      {/* My Skills Area start */}
      <section className='my-skills-area rel z-1'>
        <div className='container container-1290'>
          <div className='row gap-100 justify-content-between align-items-center'>
            <div className='col-lg-5'>
              <div className='my-skill-content rmb-55 wow fadeInLeft delay-0-2s'>
                <div className='section-title mb-35'>
                  <span className='sub-title mb-15'>
                    My Skills &amp; Experience
                  </span>
                  <h3>I’m A Skilled Engineer</h3>
                </div>
                <p>
                  Demonstrating expertise in building full-stack web applications using the MERN | PERN stack (MongoDB, PostgreSQL, Express.js, React.js, Node.js). From designing robust back-end architectures and managing databases to crafting responsive and dynamic front-end user interfaces, I specialize in delivering seamless and scalable solutions. My projects highlight the integration of modern technologies to create efficient, user-centric applications
                </p>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='my-skill-images wow fadeInRight delay-0-2s'>
                {techImages?.map((t) => (
                  <div key={t?.src} className='skill-item'>
                    <img src={t?.src} alt={t?.alt} loading="lazy" />
                    <span className='text'>{t?.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* My Skills Area end */}



      {/* Service Box start */}
      <section className='service-section pt-130 rpt-100 pb-100 rpb-70'></section>
      {/* Service Box end */}


      {/* Work Gallery Area start */}
      <ProjectsSlider />
      {/* Work Gallery Area end */}


      {/* Service Box start */}
      <section className='service-section pt-30 rpt-100 pb-30 rpb-70'></section>
      {/* Service Box end */}


      {/* Work History */}
      <section id='work' className='work-gallery-area pb-130 rpb-100'>
        <div className='container container-1290'>
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className='section-title text-center mb-60 wow fadeInUp delay-0-2s'>
                <span className='sub-title mb-20'>My Past Work History</span>
                <h2>My Career In A Blink</h2>
              </div>
            </div>
          </div>
        </div>
        <WorkVerticalTimeline />
      </section>
      {/* Work History End */}



      {/* Headline area start */}
      <div className='headline-area bgc-primary py-40 rpy-25'>
        <div className='container-fluid'>
          <div className='headline-wrap-two'>
            <span className='marquee-wrap'>
              <span className='marquee-inner left'>
                {techList.map((t) => (
                  <span key={t} className='marquee-item'>
                    <i className='fas fa-star-of-life' />
                    <b>{t}</b>
                  </span>
                ))}
              </span>
              <span className='marquee-inner left'>
                {techList.map((t) => (
                  <span key={t} className='marquee-item'>
                    <i className='fas fa-star-of-life' />
                    <b>{t}</b>
                  </span>
                ))}
              </span>
              <span className='marquee-inner left'>
                {techList.map((t) => (
                  <span key={t} className='marquee-item'>
                    <i className='fas fa-star-of-life' />
                    <b>{t}</b>
                  </span>
                ))}
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}




      {/* Our Awards Area start */}
      <section
        id='education'
        className='our-awards-area py-130 rpy-100 rel z-1'
      >
        <div className='container container-1290'>
          <div className='row align-items-end pb-35'>
            <div className='col-lg-8'>
              <div className='section-title mb-30 wow fadeInUp delay-0-2s'>
                <span className='sub-title mb-15'>My Education</span>
                <h2>Related Education</h2>
              </div>
            </div>
          </div>

          <div className='row align-items-center justify-content-between'>
            <Tab.Container defaultActiveKey={'awards-tab-one'}>
              <div className='col-lg-5'>
                <div className='awards-tab-content rmb-75 rel wow fadeInLeft delay-0-2s'>
                  <Tab.Content className='tab-content'>
                    <Tab.Pane
                      className='tab-pane fade'
                      eventKey='awards-tab-one'
                    >
                      <div>
                        <img
                          src='assets/images/about/degree.jpg'
                          alt='usama irfan saylani mass it certification software engineer'
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className='tab-pane fade'
                      eventKey='awards-tab-two'
                    >
                      <div>
                        <img
                          src='assets/images/about/udemy.png'
                          alt='usama irfan udemy certification software engineer'
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className='tab-pane fade'
                      eventKey='awards-tab-three'
                    >
                      <div>
                        <img
                          src='assets/images/about/cisco.png'
                          alt='cisco certification usama irfan software engineer'
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
              <div className='col-lg-6'>
                <Nav className='awards-tabs nav flex-column nav-pills wow fadeInRight delay-0-2s'>
                  <Nav.Link
                    as='button'
                    className='nav-link'
                    eventKey='awards-tab-one'
                  >
                    <span className='left'>
                      <span className='h3'>
                        Bachelor&rsquo;s in Software Engineering
                      </span>
                      <span className='award-type'>
                        IQRA UNIVERSITY
                      </span>
                    </span>
                  </Nav.Link>
                  <div
                    // as='button'
                    className='nav-link'
                  // eventKey='awards-tab-two'
                  >
                    <span className='left'>

                      <span className='award-type'>
                        I earned my Bachelor&rsquo;s degree in Software Engineering in March 2022, where I developed a strong foundation in programming, software design, and engineering practices, equipping me with the skills needed to excel in the tech industry.
                      </span>
                    </span>
                  </div>

                </Nav>
              </div>
            </Tab.Container>
          </div>
        </div>
      </section>
      {/* Our Awards Area end */}




      {/* Drop Me Area start */}
      <section id='contact' className='drop-me-area'
        style={{ paddingTop: "100px" }}
      >
        <div className='container container-1290'>
          <div className='row align-items-start justify-content-start justify-content-lg-between'>


            <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10'>
              <div className="col-lg-12">
                <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                  <div className="row">
                    <div className="col-xl-10">
                      <div className="section-title mb-60">
                        <span className="sub-title mb-15">Contact</span>
                        <h2>Contact Me</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row gap-80 pb-30">

                    <div className="col-sm-12">
                      <div className="our-location-address mb-40">
                        <h5>Karachi, Pakistan</h5>
                        <p>
                          Gulshan-e-Iqbal Block 13D, Karachi.
                        </p>
                        <a className="callto" href="mailto:support@gmail.com">
                          <i className="fas fa-envelope" /> smsidrees@gmail.com
                        </a>
                        <br />
                        {/* <a className="callto" href="callto:+00012345688">
                          <i className="fas fa-phone" /> +971 3332311978
                        </a>
                        <br /> */}
                        <a className="callto" href="callto:+00012345688">
                          <i className="fas fa-phone" /> +92 3332311978
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='drop-me-form-part rmb-50 wow fadeInLeft delay-0-2s'>
                <div className='section-title mb-40'>
                  <span className='sub-title mb-20'>Drop Me A Message</span>
                  <h2>Let&rsquo;s Get In Touch</h2>
                </div>
                <ContactForm1 />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Drop Me Area end */}




      {/* Headline area start */}
      <div className='headline-area rel z-1 move-top-two'>
        <div className='container-fluid'>
          <div className='headline-text style-three marquee pb-20'>
            <span>
              <span>Get Start Your Projects</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}




    </Layout>
  );
};



export default Index4;
