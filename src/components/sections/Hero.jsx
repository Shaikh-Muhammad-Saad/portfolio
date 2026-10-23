import { useEffect, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { LuArrowRight, LuCode2, LuMail, LuMapPin } from 'react-icons/lu';

import styles from './Hero.module.css';

import Img from '@/src/components/ui/Img';
import { experience } from '@/src/data/experience';
import manifest from '@/src/data/image-manifest.json';
import { heroWords, site, stats } from '@/src/data/site';
import { skillGroups } from '@/src/data/skills';

const current = experience.find((e) => e.current);
const heroStack = ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'MongoDB']
  .map((name) =>
    skillGroups.flatMap((g) => g.items).find((i) => i.name === name)
  )
  .filter(Boolean);

const useTypewriter = (words) => {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return undefined;
    let word = 0;
    let len = words[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const full = words[word];
      len += deleting ? -1 : 1;
      setText(full.slice(0, len));

      let delay = deleting ? 35 : 70;
      if (!deleting && len === full.length) {
        deleting = true;
        delay = 2200;
      } else if (deleting && len === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
};

const Hero = () => {
  const typed = useTypewriter(heroWords);

  return (
    <section id='home' className={styles.hero}>
      <div className={styles.backdrop} aria-hidden='true'>
        <span className={styles.grid} />
        <span className={`${styles.blob} ${styles.blobA}`} />
        <span className={`${styles.blob} ${styles.blobB}`} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {current ? (
            <a
              href={current.link}
              target='_blank'
              rel='noreferrer'
              className={`${styles.badge} ${styles.in}`}
            >
              <span className={styles.pulse} aria-hidden='true' />
              {current.title.replace(/\s*\(.*\)/, '')} at{' '}
              <strong>{current.company}</strong>
              <LuArrowRight />
            </a>
          ) : null}

          <h1
            className={`${styles.title} ${styles.in}`}
            style={{ '--d': '80ms' }}
          >
            {site.name}
            <span className={styles.titleRole}>
              <span className='gradient-text'>Software Engineer</span>
            </span>
          </h1>

          <p
            className={`${styles.terminal} ${styles.in}`}
            style={{ '--d': '160ms' }}
            aria-label={`Building ${heroWords.join(', ')}`}
          >
            <span className={styles.prompt} aria-hidden='true'>
              $
            </span>
            <span aria-hidden='true'>
              building <span className={styles.typed}>{typed}</span>
              <span className={styles.caret} />
            </span>
          </p>

          <p
            className={`${styles.lead} ${styles.in}`}
            style={{ '--d': '240ms' }}
          >
            5 years of experience across the <strong>MERN</strong> and{' '}
            <strong>PERN</strong> stacks, with a proven track record in web and
            mobile development &mdash; delivering robust, scalable and efficient
            digital solutions.
          </p>

          <div
            className={`${styles.actions} ${styles.in}`}
            style={{ '--d': '320ms' }}
          >
            <a href='#projects' className='btn btn-primary'>
              View my work <LuArrowRight />
            </a>
            <a href='#contact' className='btn btn-ghost'>
              Get in touch
            </a>
            <div className={styles.socials}>
              <a
                href={site.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn />
              </a>
              <a href={`mailto:${site.email}`} aria-label='Email'>
                <LuMail />
              </a>
            </div>
          </div>

          <dl
            className={`${styles.stats} ${styles.in}`}
            style={{ '--d': '400ms' }}
          >
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt>{s.label}</dt>
                <dd>
                  {s.value}
                  <span>{s.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`${styles.visual} ${styles.in}`}
          style={{ '--d': '200ms' }}
        >
          <div className={styles.portrait}>
            <Img
              photo={manifest.portrait}
              alt={`${site.name}, Software Engineer`}
              sizes='(max-width: 960px) 80vw, 460px'
              position='28% 40%'
              priority
            />
            <span className={styles.portraitShade} aria-hidden='true' />
          </div>

          <div className={`${styles.chip} ${styles.chipTop}`}>
            <span className={styles.chipIcon}>
              <LuCode2 />
            </span>
            <span>
              <strong>MERN | PERN</strong>
              <small>Full-stack</small>
            </span>
          </div>

          <div className={`${styles.chip} ${styles.chipBottom}`}>
            <span className={styles.chipIcon}>
              <LuMapPin />
            </span>
            <span>
              <strong>{site.location.split(',')[0]}</strong>
              <small>{site.location.split(',')[1]}</small>
            </span>
          </div>

          <div className={styles.stack}>
            {heroStack.map((s) => (
              <span key={s.name} className={styles.stackLogo} title={s.name}>
                <img src={s.logo} alt={s.name} width={28} height={28} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
