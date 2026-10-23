import { LuCode2, LuDatabase, LuPalette, LuServer } from 'react-icons/lu';

import styles from './About.module.css';

import Reveal from '@/src/components/ui/Reveal';
import useSpotlight from '@/src/components/ui/useSpotlight';
import { about } from '@/src/data/site';

const icons = {
  web: LuCode2,
  server: LuServer,
  design: LuPalette,
  database: LuDatabase,
};

const About = () => {
  const onMove = useSpotlight();

  return (
    <section
      id='about'
      className={`section ${styles.about}`}
      aria-labelledby='about-title'
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <span className='eyebrow'>About me</span>
          <h2 id='about-title' className='section-title'>
            {about.heading[0]}{' '}
            <span className='gradient-text'>{about.heading[1]}</span>
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={styles.text}>
              {p}
            </p>
          ))}
        </Reveal>

        <ul className={styles.cards}>
          {about.focus.map(({ icon, title, text }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal
                as='li'
                key={title}
                delay={i * 90}
                className={`spotlight ${styles.card}`}
                onMouseMove={onMove}
              >
                <span className={styles.icon}>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className={styles.index}>0{i + 1}</span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
