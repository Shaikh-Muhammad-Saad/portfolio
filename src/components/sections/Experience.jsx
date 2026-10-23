import { useState } from 'react';
import { LuArrowUpRight, LuBriefcase, LuMapPin } from 'react-icons/lu';

import styles from './Experience.module.css';

import Reveal from '@/src/components/ui/Reveal';
import useSpotlight from '@/src/components/ui/useSpotlight';
import { experience } from '@/src/data/experience';

const Role = ({ role, index, onMove }) => {
  const [expanded, setExpanded] = useState(false);
  const descId = `role-desc-${index}`;
  // Short descriptions fit in the 3-line clamp, so they don't need a toggle.
  const isLong = role.description.length > 260;

  return (
    <Reveal as='li' className={styles.item} delay={60}>
      <span
        className={`${styles.dot} ${role.current ? styles.dotCurrent : ''}`}
        aria-hidden='true'
      />
      <article className={`spotlight ${styles.card}`} onMouseMove={onMove}>
        <header className={styles.head}>
          <div className={styles.meta}>
            <span className={styles.duration}>{role.duration}</span>
            {role.current ? (
              <span className={styles.current}>Current</span>
            ) : null}
          </div>
          <h3 className={styles.role}>{role.title}</h3>
          <div className={styles.company}>
            {role.link ? (
              <a href={role.link} target='_blank' rel='noreferrer'>
                {role.company}
                <LuArrowUpRight />
              </a>
            ) : (
              <span className={styles.companyName}>{role.company}</span>
            )}
            {role.type ? (
              <span className={styles.type}>{role.type}</span>
            ) : null}
            <span className={styles.place}>
              <LuMapPin /> {role.place}
            </span>
          </div>
        </header>

        <p
          id={descId}
          className={`${styles.desc} ${expanded ? styles.descOpen : ''}`}
        >
          {role.description}
        </p>
        {isLong ? (
          <button
            type='button'
            className={styles.more}
            aria-expanded={expanded}
            aria-controls={descId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        ) : null}

        <ul className={styles.tags}>
          {role.tags.map((t) => (
            <li key={t} className='tag'>
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
};

const Experience = () => {
  const onMove = useSpotlight();

  return (
    <section
      id='experience'
      className={`section ${styles.section}`}
      aria-labelledby='experience-title'
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <Reveal>
            <span className='eyebrow'>My past work history</span>
            <h2 id='experience-title' className='section-title'>
              My career <span className='gradient-text'>in a blink.</span>
            </h2>
            <p className='section-lead'>
              From crafting React interfaces to architecting microservices and
              leading teams &mdash; working with companies across Pakistan, the
              UAE, Malaysia and Australia.
            </p>
            <div className={styles.summary}>
              <span className={styles.summaryIcon}>
                <LuBriefcase />
              </span>
              <span>
                <strong>{experience.length} roles</strong>
                <small>
                  {experience[experience.length - 1].duration.split(' - ')[0]}{' '}
                  &mdash; Present
                </small>
              </span>
            </div>
          </Reveal>
        </div>

        <ol className={styles.timeline}>
          {experience.map((role, i) => (
            <Role
              key={`${role.company}-${role.duration}`}
              role={role}
              index={i}
              onMove={onMove}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
