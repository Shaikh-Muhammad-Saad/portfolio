import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';

import ContactFormSvg from '@/src/assets/svgs/contact.svg';

import ContactForm1 from '../components/ContactForm1';
import ProjectsSlider from '../components/projects/ProjectsSlider';
import SEOWrapper from '../components/SEOWrapper';
import WorkVerticalTimeline from '../components/VerticalTimeline';
import contentClient from '../contentful/client';
import Layout from '../layout/Layout';

const Counter = dynamic(() => import('../components/Counter'), {
  ssr: false,
});

const techList = [
  'Sass',
  'HTML',
  'CSS',
  'js',
  'php',
  'WordPress',
  'javascript',
  'Angular',
  'Shopify',
];

const techImages = [
  {
    src: 'assets/images/skills/skill4.png',
    alt: 'Skill icon',
    title: 'Javascript',
  },
  {
    src: 'assets/images/skills/net.png',
    alt: 'Skill icon',
    title: '.NET',
  },
  {
    src: 'assets/images/skills/next.jpeg',
    alt: 'Skill icon',
    title: 'Next.js',
  },
  {
    src: 'assets/images/skills/node.png',
    alt: 'Skill icon',
    title: 'Node.js',
  },
  {
    src: 'assets/images/skills/typescript.png',
    alt: 'Skill icon',
    title: 'Typescript',
  },
  {
    src: 'assets/images/skills/skill7.png',
    alt: 'Skill icon',
    title: 'PHP',
  },
  {
    src: 'assets/images/skills/laravel.png',
    alt: 'Skill icon',
    title: 'Laravel',
  },
  {
    src: 'assets/images/skills/tailwind.png',
    alt: 'Skill icon',
    title: 'Tailwind',
  },
  {
    src: 'assets/images/skills/react.png',
    alt: 'Skill icon',
    title: 'React.js',
  },
  {
    src: 'assets/images/skills/android-swift.png',
    alt: 'Skill icon',
    title: 'React-native',
  },
  {
    src: 'assets/images/skills/skill13.png',
    alt: 'Skill icon',
    title: 'Vue.js',
  },
  {
    src: 'assets/images/skills/skill6.png',
    alt: 'Skill icon',
    title: 'WordPress',
  },
  {
    src: 'assets/images/skills/skill11.png',
    alt: 'Skill icon',
    title: 'Shopify',
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
            {/* <br /> */}
            {/* <span className='arrow'>
              <img
                className='wow fadeInLeft delay-0-6s'
                src='assets/images/hero/title-arrow.png'
                alt='Arrow'
              />
            </span>
            Software Engineer */}

            <br />
            Software Engineer
          </h1>
          {/* <div className='row align-items-center justify-content-between'>
            <div className='col-xl-3 col-lg-4'>
              <div className='hero-two-content mb-50 wow fadeInRight delay-0-2s'>
                <p>
                  I am a dedicated Software Engineer with over three years of
                  experience in web and mobile development. With a strong
                  command of the MERN stack (MongoDB, Express.js, React.js, and
                  Node.js) / React-native, I am skilled at crafting efficient,
                  robust, and user-friendly digital solutions.
                </p>
                <img
                  className='mt-20'
                  src='assets/images/hero/arrow.png'
                  alt='Arrow'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-two-image position-relative mb-50 wow zoomIn delay-0-2s'>
                <Image
                  width={800}
                  height={500}
                  style={{ objectFit: 'contain' }}
                  src='/assets/images/hero/usamairfangit.jpeg'
                  alt='Hero'
                />
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='hero-two-btn mb-50 wow fadeInLeft delay-0-2s'>
                <Link legacyBehavior href='#projects'>
                  <a className='explore-more'>
                    <i className='fas fa-arrow-right' />{' '}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
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
                      A professional Software Engineer with 4 years of
                      experience, proficient in cutting-edge technologies such
                      as the MERN stack. With a proven track record in both web and mobile
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
                    <img src='assets/images/about/me.png' alt='About' />
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
                  Boasting an impressive collection of certifications, my
                  technical skills are both diverse and well-established. I hold
                  certifications in JavaScript, Node.js, React.js, and MongoDB,
                  demonstrating my profound knowledge of the MERN stack. Beyond
                  these certifications, I am also well-versed in the latest web
                  and mobile development techniques, software engineering best
                  practices, and agile methodologies. My skills are complemented
                  by my ability to design and implement efficient algorithms and
                  data structures, perform code reviews, and debug complex
                  issues. With a relentless commitment to continuous learning, I
                  am perpetually honing my expertise to stay at the forefront of
                  technological advancements.
                </p>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='my-skill-images wow fadeInRight delay-0-2s'>
                {techImages?.map((t) => (
                  <div key={t?.src} className='skill-item'>
                    <img src={t?.src} alt={t?.alt} />
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
      <section className='service-section pt-130 rpt-100 pb-100 rpb-70'></section>
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
        <WorkVerticalTimeline timeline={workHistory} />
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
                <span className='sub-title mb-15'>My Certifications</span>
                <h2>My Related Certifications</h2>
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
                          src='assets/images/about/smit.jpeg'
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
                        Web And Mobile Hybrid App Development
                      </span>
                      <span className='award-type'>
                        SAYLANI MASS IT TRAINING
                      </span>
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    as='button'
                    className='nav-link'
                    eventKey='awards-tab-two'
                  >
                    <span className='left'>
                      <span className='h3'>
                        The Complete Web Development 2.0
                      </span>
                      <span className='award-type'>UDEMY</span>
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    as='button'
                    className='nav-link'
                    eventKey='awards-tab-three'
                  >
                    <span className='left'>
                      <span className='h3'>NDG Linux Essentials Course</span>
                      <span className='award-type'>
                        CISCO NETWORKING ACADEMY
                      </span>
                    </span>
                  </Nav.Link>
                </Nav>
              </div>
            </Tab.Container>
          </div>
        </div>
      </section>
      {/* Our Awards Area end */}
      {/* CTA Area start */}
      <div className='cta-area bgc-primary pt-30 mb-100 pb-15 rel z-1'>
        <div className='container'>
          <div className='cta-wrap'>
            <h4>I&rsquo;m available for freelance work</h4>
            <Link
              legacyBehavior
              href='https://www.upwork.com/freelancers/~01641333f94bdccc85'
              target='_blank'
            >
              <a className='theme-btn'>
                Hire Me <i className='far fa-arrow-right' />
              </a>
            </Link>
          </div>
        </div>
        <div className='cta-shapes'>
          <img
            className='shape one'
            src='assets/images/shapes/circle.png'
            alt='Circle'
          />
          <img
            className='shape two'
            src='assets/images/shapes/close.png'
            alt='Close'
          />
          <img
            className='shape three'
            src='assets/images/shapes/weve-lines.png'
            alt='Weve Line'
          />
          <img
            className='shape four'
            src='assets/images/shapes/circle.png'
            alt='Circle'
          />
          <img
            className='shape five'
            src='assets/images/shapes/close.png'
            alt='Close'
          />
          <img
            className='shape six'
            src='assets/images/shapes/weve-lines.png'
            alt='Weve Line'
          />
        </div>
      </div>


      {/* CTA Area end */}
      {/* Drop Me Area start */}
      <section id='contact' className='drop-me-area'>
        <div className='container container-1290'>
          <div className='row align-items-center justify-content-center justify-content-lg-between'>
            <div className='col-lg-6'>
              <div className='drop-me-form-part rmb-50 wow fadeInLeft delay-0-2s'>
                <div className='section-title mb-40'>
                  <span className='sub-title mb-20'>Drop Me A Line</span>
                  <h2>Let&rsquo;s Get In Touch</h2>
                </div>
                <ContactForm1 />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10'>
              <div className='drop-me-image-part wow fadeInRight delay-0-2s position-relative'>
                <div className='text-center position-relative'>
                  <Image
                    width={500}
                    height={500}
                    objectFit='contain'
                    src={ContactFormSvg}
                    alt='contact usama irfan email me software engineer'
                  />
                </div>
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

export async function getStaticProps() {
  const response = await contentClient.getWorkHistory();

  response.items.forEach((i) => delete i.fields?.related);

  return {
    props: {
      workHistory: response.items,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 360, // In seconds
  };
}

export default Index4;
