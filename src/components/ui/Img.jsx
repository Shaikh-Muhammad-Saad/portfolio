import { useEffect, useRef, useState } from 'react';

import styles from './Img.module.css';

import {
  buildSrcSet,
  canOptimize,
  optimizeUrl,
  placeholderUrl,
} from '@/src/lib/images';

const DEFAULT_WIDTHS = [480, 768, 1080, 1440, 1920];

const toSrcSet = (list) => list.map(([src, w]) => `${src} ${w}w`).join(', ');

/**
 * Responsive image with a blurred placeholder and fade-in.
 *
 * - `src`: a remote URL (Cloudinary/Contentful get resized on their CDN).
 * - `photo`: an entry from src/data/image-manifest.json (pre-optimized local AVIF/WebP).
 * - `priority`: above-the-fold hero image (eager + high fetch priority); `eager`: skip lazy-loading only.
 * The parent decides the size; the image fills it.
 */
const Img = ({
  src,
  photo,
  alt = '',
  sizes = '100vw',
  widths = DEFAULT_WIDTHS,
  priority = false,
  eager = false,
  fit = 'cover',
  position = 'center',
  className = '',
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Images served from cache can finish before React hydrates and attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth) setLoaded(true);
  }, []);

  const blur = photo ? photo.blur : placeholderUrl(src);
  const imgProps = {
    ref,
    alt,
    sizes,
    loading: priority || eager ? 'eager' : 'lazy',
    decoding: priority ? 'sync' : 'async',
    fetchpriority: priority ? 'high' : 'auto',
    onLoad: () => setLoaded(true),
    onError: () => setFailed(true),
    className: `${styles.img} ${loaded ? styles.loaded : ''} ${imgClassName}`,
    style: { objectFit: fit, objectPosition: position },
  };

  let media;
  if (photo) {
    const largest = photo.webp[photo.webp.length - 1][0];
    media = (
      <picture>
        <source type='image/avif' srcSet={toSrcSet(photo.avif)} sizes={sizes} />
        <source type='image/webp' srcSet={toSrcSet(photo.webp)} sizes={sizes} />
        <img
          {...imgProps}
          src={largest}
          width={photo.width}
          height={photo.height}
        />
      </picture>
    );
  } else if (canOptimize(src)) {
    media = (
      <img
        {...imgProps}
        src={optimizeUrl(src, {
          width: widths[Math.min(2, widths.length - 1)],
        })}
        srcSet={buildSrcSet(src, widths)}
      />
    );
  } else {
    media = <img {...imgProps} src={src} />;
  }

  return (
    <span
      className={`${styles.frame} ${
        loaded ? styles.frameLoaded : ''
      } ${className}`}
      style={
        blur && !loaded ? { backgroundImage: `url("${blur}")` } : undefined
      }
    >
      {failed ? (
        <span className={styles.fallback}>{alt || 'Image unavailable'}</span>
      ) : (
        media
      )}
    </span>
  );
};

export default Img;
