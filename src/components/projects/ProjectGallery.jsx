import { useMemo, useState } from 'react';
import { LuMaximize2 } from 'react-icons/lu';

import styles from './ProjectGallery.module.css';

import Img from '@/src/components/ui/Img';
import Lightbox from '@/src/components/ui/Lightbox';
import Reveal from '@/src/components/ui/Reveal';

import { GALLERY_WIDTHS } from './constants';

// The first rows are visible almost immediately, so don't make them wait for lazy-loading.
const EAGER_COUNT = 6;

const ProjectGallery = ({ images, name }) => {
  const [active, setActive] = useState(null);
  const items = useMemo(
    () => images.map((src, i) => ({ src, alt: `${name} screen ${i + 1}` })),
    [images, name]
  );

  return (
    <>
      <div className={styles.grid}>
        {items.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 70}>
            <button
              type='button'
              className={styles.item}
              onClick={() => setActive(i)}
              aria-label={`Open ${img.alt}`}
            >
              <Img
                src={img.src}
                alt={img.alt}
                widths={GALLERY_WIDTHS}
                sizes='(max-width: 560px) calc(100vw - 32px), (max-width: 960px) 50vw, 400px'
                position='top center'
                eager={i < EAGER_COUNT}
              />
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
