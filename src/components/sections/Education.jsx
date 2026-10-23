import { useState } from 'react';
import {
  LuArrowUpRight,
  LuCalendar,
  LuGraduationCap,
  LuMapPin,
  LuMaximize2,
} from 'react-icons/lu';

import styles from './Education.module.css';

import Img from '@/src/components/ui/Img';
import Lightbox from '@/src/components/ui/Lightbox';
import Reveal from '@/src/components/ui/Reveal';
import SectionHeading from '@/src/components/ui/SectionHeading';
import { education } from '@/src/data/experience';
import manifest from '@/src/data/image-manifest.json';

const degreeFull = manifest.degree.webp[manifest.degree.webp.length - 1][0];

const Education = () => {
  const [viewer, setViewer] = useState(null);

  return (
    <section
      id='education'
      className={`section ${styles.section}`}
      aria-labelledby='education-title'
    >
      <div className='container'>
        <SectionHeading
          id='education-title'
          eyebrow='My education'
          title={
            <>
              Related <span className='gradient-text'>education.</span>
            </>
          }
        />

        <Reveal className={styles.card}>
          <button
            type='button'
            className={styles.certificate}
            onClick={() => setViewer(0)}
            aria-label='View degree certificate'
          >
            <Img
              photo={manifest.degree}
              alt={`${education.degree} certificate - ${education.school}`}
              sizes='(max-width: 860px) calc(100vw - 64px), 560px'
              fit='cover'
            />
            <span className={styles.zoom}>
              <LuMaximize2 /> View certificate
            </span>
          </button>

          <div className={styles.info}>
            <span className={styles.icon}>
              <LuGraduationCap />
            </span>
            <h3 className={styles.degree}>{education.degree}</h3>
            <a
              href={education.link}
              target='_blank'
              rel='noreferrer'
              className={styles.school}
            >
              {education.school} <LuArrowUpRight />
            </a>
            <div className={styles.meta}>
              <span>
                <LuCalendar /> {education.duration}
              </span>
              <span>
                <LuMapPin /> {education.place}
              </span>
            </div>
            <p className={styles.desc}>{education.description}</p>
          </div>
        </Reveal>
      </div>

      <Lightbox
        images={[{ src: degreeFull, alt: `${education.degree} certificate` }]}
        index={viewer}
        onChange={setViewer}
        title={`${education.degree} - ${education.school}`}
      />
    </section>
  );
};

export default Education;
