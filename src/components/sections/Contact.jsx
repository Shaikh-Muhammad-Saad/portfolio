import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  LuArrowUpRight,
  LuCheck,
  LuCopy,
  LuMail,
  LuMapPin,
  LuPhone,
} from 'react-icons/lu';

import styles from './Contact.module.css';

import ContactForm from '@/src/components/ContactForm';
import Reveal from '@/src/components/ui/Reveal';
import { site } from '@/src/data/site';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const methods = [
    { icon: LuPhone, label: 'Phone', value: site.phone, href: site.phoneHref },
    { icon: LuMapPin, label: site.location, value: site.address },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: site.linkedin,
      external: true,
    },
  ];

  return (
    <section
      id='contact'
      className={`section ${styles.section}`}
      aria-labelledby='contact-title'
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.aside}>
          <span className='eyebrow'>Contact</span>
          <h2 id='contact-title' className='section-title'>
            Let&rsquo;s get <span className='gradient-text'>in touch.</span>
          </h2>
          <p className='section-lead'>
            Drop me a message &mdash; whether it&rsquo;s a role, a project or
            just a hello, I&rsquo;ll get back to you shortly.
          </p>

          <div className={styles.emailCard}>
            <span className={styles.methodIcon}>
              <LuMail />
            </span>
            <span className={styles.methodText}>
              <small>Email</small>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
            <button
              type='button'
              className={styles.copy}
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
            >
              {copied ? <LuCheck /> : <LuCopy />}
              <span aria-live='polite'>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <ul className={styles.methods}>
            {methods.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className={styles.methodIcon}>
                    <Icon />
                  </span>
                  <span className={styles.methodText}>
                    <small>{label}</small>
                    <span>{value}</span>
                  </span>
                  {href ? <LuArrowUpRight className={styles.arrow} /> : null}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className={styles.method}
                      {...(external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={styles.method}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120} className={styles.formCard}>
          <div className={styles.formHead}>
            <span className='eyebrow'>Drop me a message</span>
            <h3>Have a project in mind?</h3>
          </div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
