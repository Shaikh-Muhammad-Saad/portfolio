import { useCallback, useMemo, useState } from 'react';
import { LuArrowDownToLine, LuMaximize2 } from 'react-icons/lu';

import styles from './ProjectGallery.module.css';

import Img from '@/src/components/ui/Img';
import Lightbox from '@/src/components/ui/Lightbox';
import Reveal from '@/src/components/ui/Reveal';

import { GALLERY_WIDTHS } from './constants';

// The first rows are visible almost immediately, so don't make them wait for lazy-loading.
const EAGER_COUNT = 6;

// Cards are 16:10. Screens up to this height/width ratio are shown whole (letterboxed);
// taller ones are full-page captures: the card shows the top and the viewer scrolls.
const LONG_PAGE_RATIO = 0.9;

const ProjectGallery = ({ images, name }) => {
  const [active, setActive] = useState(null);
  const [longPages, setLongPages] = useState({});
  const items = useMemo(
    () => images.map((src, i) => ({ src, alt: `${name} screen ${i + 1}` })),
    [images, name]
  );

  const onDimensions = useCallback((i, w, h) => {
    if (h / w > LONG_PAGE_RATIO) {
      setLongPages((prev) => (prev[i] ? prev : { ...prev, [i]: true }));
    }
  }, []);

  return (
    <>
      <div className={styles.grid}>
        {items.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 70}>
            <button
              type='button'
              className={`${styles.item} ${longPages[i] ? styles.long : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Open ${img.alt}`}
            >
              <Img
                src={img.src}
                alt={img.alt}
                widths={GALLERY_WIDTHS}
                sizes='(max-width: 560px) calc(100vw - 32px), (max-width: 960px) 50vw, 400px'
                eager={i < EAGER_COUNT}
                fit={longPages[i] ? 'cover' : 'contain'}
                position='top center'
                onDimensions={(w, h) => onDimensions(i, w, h)}
              />
              {longPages[i] ? (
                <span className={styles.longBadge}>
                  <LuArrowDownToLine /> Full page
                </span>
              ) : null}
              <span className={styles.overlay} aria-hidden='true'>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.zoom}>
                  <LuMaximize2 />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={items}
        index={active}
        onChange={setActive}
        title={name}
      />
    </>
  );
};

export default ProjectGallery;
