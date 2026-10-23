import styles from './Skills.module.css';

import Reveal from '@/src/components/ui/Reveal';
import useSpotlight from '@/src/components/ui/useSpotlight';
import { skillGroups, skillsIntro, techList } from '@/src/data/skills';

const Marquee = () => (
  <div className={styles.marquee}>
    <p className='visually-hidden'>Technologies: {techList.join(', ')}</p>
    {[0, 1].map((copy) => (
      <ul key={copy} className={styles.track} aria-hidden='true'>
        {techList.map((t) => (
          <li key={t}>
            <span className={styles.star}>✦</span>
            {t}
          </li>
        ))}
      </ul>
    ))}
  </div>
);

const Skills = () => {
  const onMove = useSpotlight();

  return (
    <section
      id='skills'
      className={`section ${styles.section}`}
      aria-labelledby='skills-title'
    >
      <div className='container'>
        <div className={styles.head}>
          <Reveal>
            <span className='eyebrow'>My skills &amp; experience</span>
            <h2 id='skills-title' className='section-title'>
              I&rsquo;m a{' '}
              <span className='gradient-text'>skilled engineer.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.intro}>{skillsIntro}</p>
          </Reveal>
        </div>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <Reveal
              key={group.title}
              delay={gi * 80}
              className={`spotlight ${styles.group}`}
              onMouseMove={onMove}
            >
              <div className={styles.groupHead}>
                <h3>{group.title}</h3>
                <span>{String(group.items.length).padStart(2, '0')}</span>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.logo}>
                      <img
                        src={item.logo}
                        alt=''
                        width={26}
                        height={26}
                        loading='lazy'
                        decoding='async'
                      />
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default Skills;
