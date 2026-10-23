import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { LuArrowUpRight, LuCode2, LuMail } from 'react-icons/lu';

import styles from './Footer.module.css';

import Reveal from '@/src/components/ui/Reveal';
import { navLinks, site } from '@/src/data/site';

const Footer = () => {
  const { pathname } = useRouter();
  const href = (id) => (pathname === '/' ? `#${id}` : `/#${id}`);

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <Reveal className={styles.cta}>
          <span className={styles.ctaGlow} aria-hidden='true' />
          <span className='eyebrow'>Get started on your project</span>
          <h2 className={styles.ctaTitle}>
            Let&rsquo;s build something{' '}
            <span className='gradient-text'>great together.</span>
          </h2>
          <div className={styles.ctaActions}>
            <a href={`mailto:${site.email}`} className='btn btn-primary'>
              <LuMail /> {site.email}
            </a>
            <a href={href('contact')} className='btn btn-ghost'>
              Send a message <LuArrowUpRight />
            </a>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href='/' className={styles.brand}>
              <span className={styles.logo}>
                <LuCode2 />
              </span>
              {site.name}
            </Link>
            <p className={styles.blurb}>
              Senior Software Engineer building robust, scalable full-stack
              products with the MERN &amp; PERN stack.
            </p>
            <div className={styles.socials}>
              <a
                href={site.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn />
              </a>
              {site.github ? (
                <a
                  href={site.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub'
                >
                  <FaGithub />
                </a>
              ) : null}
              <a href={`mailto:${site.email}`} aria-label='Email'>
                <LuMail />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Navigate</h3>
            <ul className={styles.list}>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={href(id)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className={styles.built}>Designed &amp; built with Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
