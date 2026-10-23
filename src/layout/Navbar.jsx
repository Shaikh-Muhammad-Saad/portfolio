import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LuArrowUpRight, LuCode2, LuMenu, LuX } from 'react-icons/lu';

import styles from './Navbar.module.css';

import { navLinks, site } from '@/src/data/site';

const useActiveSection = (enabled) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!enabled) return undefined;
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [enabled]);

  return active;
};

const Navbar = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(isHome);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        max > 0 ? window.scrollY / max : 0
      );
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    router.events.on('hashChangeStart', close);
    return () => {
      router.events.off('routeChangeStart', close);
      router.events.off('hashChangeStart', close);
    };
  }, [router.events]);

  const href = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={`${styles.header} ${
          scrolled || open ? styles.scrolled : ''
        }`}
      >
        <span className={styles.progress} aria-hidden='true' />
        <nav className={`container ${styles.inner}`} aria-label='Main'>
          <Link
            href='/'
            className={styles.brand}
            aria-label={`${site.name} - home`}
          >
            <span className={styles.logo}>
              <LuCode2 />
            </span>
            <span className={styles.brandText}>
              {site.shortName}
              <span className={styles.brandDot}>.</span>
            </span>
          </Link>

          <ul className={styles.links}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={href(id)}
                  className={`${styles.link} ${
                    active === id ? styles.active : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href={href('contact')}
              className={`btn btn-primary btn-sm ${styles.cta}`}
            >
              Let&rsquo;s talk <LuArrowUpRight />
            </a>
            <button
              type='button'
              className={styles.toggle}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls='mobile-menu'
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id='mobile-menu'
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        aria-hidden={!open}
      >
        <ul>
          {navLinks.map(({ id, label }, i) => (
            <li key={id} style={{ '--i': i }}>
              <a
                href={href(id)}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span className={styles.mobileIndex}>0{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileFooter}>
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
            {site.email}
          </a>
          <span>{site.location}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
