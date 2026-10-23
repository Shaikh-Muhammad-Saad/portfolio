import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

import styles from './ProjectCard.module.css';

import Img from '@/src/components/ui/Img';
import Reveal from '@/src/components/ui/Reveal';
import useSpotlight from '@/src/components/ui/useSpotlight';
import { prefetchImage } from '@/src/lib/images';

import {
  CARD_WIDTHS,
  COVER_MAX_CSS_WIDTH,
  COVER_WIDTHS,
  pickWidth,
} from './constants';

const ProjectCard = ({ project, index, size = 'md', delay = 0 }) => {
  const onMove = useSpotlight();
  const href = `/project-details/${project.slug}`;

  const warmUp = () => {
    const cssWidth = Math.min(window.innerWidth - 32, COVER_MAX_CSS_WIDTH);
    prefetchImage(project.bannerImage, pickWidth(cssWidth, COVER_WIDTHS));
  };

  return (
    <Reveal
      as='article'
      delay={delay}
      className={`spotlight ${styles.card} ${styles[size]}`}
      onMouseMove={onMove}
      onMouseEnter={warmUp}
      onFocus={warmUp}
      onTouchStart={warmUp}
    >
      <div className={styles.media}>
        <Img
          src={project.bannerImage}
          alt={`${project.name} - ${project.info}`}
          widths={CARD_WIDTHS}
          sizes={
            size === 'lg'
              ? '(max-width: 760px) calc(100vw - 32px), (max-width: 1264px) 50vw, 600px'
              : '(max-width: 760px) calc(100vw - 32px), (max-width: 1080px) 50vw, 400px'
          }
          position='center'
        />
        <span className={styles.shade} aria-hidden='true' />
        <span className={styles.view} aria-hidden='true'>
          View project <LuArrowUpRight />
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.top}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.index}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className={styles.title}>
          <Link href={href} className={styles.stretched}>
            {project.name}
          </Link>
        </h3>
        <p className={styles.info}>{project.info}</p>
        <div className={styles.footer}>
          {project.liveURL ? (
            <a
              href={project.liveURL}
              target='_blank'
              rel='noreferrer'
              className={styles.live}
            >
              <span className={styles.liveDot} aria-hidden='true' />
              {project.liveURLText}
              <LuArrowUpRight />
            </a>
          ) : (
            <span />
          )}
          {project.images?.length ? (
            <span className={styles.count}>
              {project.images.length} screens
            </span>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
