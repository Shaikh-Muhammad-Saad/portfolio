import Link from 'next/link';
import {
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuGlobe,
  LuImage,
  LuLayers,
  LuMonitorSmartphone,
} from 'react-icons/lu';

import styles from '@/src/components/projects/ProjectDetails.module.css';

import { COVER_WIDTHS } from '@/src/components/projects/constants';
import ProjectGallery from '@/src/components/projects/ProjectGallery';
import SEOWrapper from '@/src/components/SEOWrapper';
import Img from '@/src/components/ui/Img';
import Reveal from '@/src/components/ui/Reveal';
import { projectDetailsList } from '@/src/data/projects';
import Layout from '@/src/layout/Layout';

const NeighbourCard = ({ project, dir }) => (
  <Link
    href={`/project-details/${project.slug}`}
    className={`${styles.neighbour} ${
      dir === 'next' ? styles.neighbourNext : ''
    }`}
  >
    <span className={styles.neighbourThumb}>
      <Img src={project.bannerImage} alt='' widths={[320, 480]} sizes='160px' />
    </span>
    <span className={styles.neighbourText}>
      <small>
        {dir === 'prev' ? <LuArrowLeft /> : null}
        {dir === 'prev' ? 'Previous project' : 'Next project'}
        {dir === 'next' ? <LuArrowRight /> : null}
      </small>
      <strong>{project.name}</strong>
      <span>{project.category}</span>
    </span>
  </Link>
);

const ProjectDetails = ({ project, prev, next }) => {
  const [w, h] = project.bannerSize || [16, 9];
  const facts = [
    { icon: LuLayers, label: 'Type', value: project.category },
    { icon: LuMonitorSmartphone, label: 'Scope', value: project.info },
    project.images?.length
      ? {
          icon: LuImage,
          label: 'Screens',
          value: `${project.images.length} screens`,
        }
      : null,
  ].filter(Boolean);

  return (
    <Layout>
      <SEOWrapper
        title={project.name}
        description={
          project.description?.length > 160
            ? `${project.description.slice(0, 157)}...`
            : project.description
        }
        image={project.bannerImage}
        type='article'
      />

      <section className={styles.hero}>
        <span className={styles.glow} aria-hidden='true' />
        <div className='container'>
          <Link href='/#projects' className={styles.back}>
            <LuArrowLeft /> All projects
          </Link>

          <div className={styles.heading}>
            <div>
              <span className={`eyebrow ${styles.in}`}>{project.category}</span>
              <h1
                className={`${styles.title} ${styles.in}`}
                style={{ '--d': '60ms' }}
              >
                {project.name}
              </h1>
              <p
                className={`${styles.lead} ${styles.in}`}
                style={{ '--d': '120ms' }}
              >
                {project.info}
              </p>
            </div>
            {project.liveURL ? (
              <a
                href={project.liveURL}
                target='_blank'
                rel='noreferrer'
                className={`btn btn-primary ${styles.in}`}
                style={{ '--d': '180ms' }}
              >
                <LuGlobe /> Visit {project.liveURLText} <LuArrowUpRight />
              </a>
            ) : null}
          </div>

          <div
            className={`${styles.cover} ${styles.in}`}
            style={{ '--d': '220ms', aspectRatio: `${w} / ${h}` }}
          >
            <Img
              src={project.bannerImage}
              alt={`${project.name} - ${project.info}`}
              widths={COVER_WIDTHS}
              sizes='(max-width: 1264px) calc(100vw - 32px), 1200px'
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={`container ${styles.overviewGrid}`}>
          <Reveal>
            <span className='eyebrow'>Overview</span>
            <h2 className={styles.h2}>More about the project</h2>
            <p className={styles.description}>{project.description}</p>
          </Reveal>

          <Reveal as='aside' delay={100} className={styles.facts}>
            <h3>Project information</h3>
            <dl>
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt>
                    <Icon /> {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
              {project.liveURL ? (
                <div>
                  <dt>
                    <LuGlobe /> Live
                  </dt>
                  <dd>
                    <a href={project.liveURL} target='_blank' rel='noreferrer'>
                      {project.liveURLText} <LuArrowUpRight />
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </Reveal>
        </div>
      </section>

      {project.images?.length ? (
        <section className={styles.gallery}>
          <div className='container'>
            <Reveal className={styles.galleryHead}>
              <div>
                <span className='eyebrow'>Gallery</span>
                <h2 className={styles.h2}>Inside {project.name}</h2>
              </div>
              <p>Click any screen to view it full size.</p>
            </Reveal>
            <ProjectGallery images={project.images} name={project.name} />
          </div>
        </section>
      ) : null}

      <nav className={styles.neighbours} aria-label='More projects'>
        <div className={`container ${styles.neighboursGrid}`}>
          <NeighbourCard project={prev} dir='prev' />
          <NeighbourCard project={next} dir='next' />
        </div>
      </nav>
    </Layout>
  );
};

export const getStaticPaths = () => ({
  paths: projectDetailsList.map((p) => ({ params: { slug: p.slug } })),
  fallback: 'blocking',
});

export const getStaticProps = ({ params }) => {
  const index = projectDetailsList.findIndex((p) => p.slug === params.slug);

  if (index === -1) {
    return { redirect: { destination: '/', permanent: false } };
  }

  const total = projectDetailsList.length;
  const pick = ({ name, slug, bannerImage, category }) => ({
    name,
    slug,
    bannerImage,
    category,
  });

  return {
    props: {
      project: projectDetailsList[index],
      prev: pick(projectDetailsList[(index - 1 + total) % total]),
      next: pick(projectDetailsList[(index + 1) % total]),
    },
  };
};

export default ProjectDetails;
