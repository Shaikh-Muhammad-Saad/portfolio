import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LuChevronLeft, LuChevronRight, LuLoader2, LuX } from 'react-icons/lu';

import styles from './Lightbox.module.css';

import { optimizeUrl } from '@/src/lib/images';

const VIEW_WIDTHS = [960, 1440, 2000, 2560];

const viewSrc = (src) => {
  const target = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  const width =
    VIEW_WIDTHS.find((w) => w >= target) || VIEW_WIDTHS[VIEW_WIDTHS.length - 1];
  return optimizeUrl(src, { width });
};

/**
 * Fullscreen image viewer.
 * images: [{ src, alt }]. Controlled via `index` (null = closed) and `onChange`.
 */
const Lightbox = ({ images, index, onChange, title }) => {
  const open = index !== null && index !== undefined;
  const [loadedSrc, setLoadedSrc] = useState(null);
  // Full-page captures are far taller than the screen: show them at a readable
  // width and let the stage scroll instead of shrinking them to fit.
  const [scrollable, setScrollable] = useState({});
  const closeRef = useRef(null);
  const stageRef = useRef(null);
  const thumbsRef = useRef(null);
  const touchX = useRef(null);
  const count = images.length;

  const close = useCallback(() => onChange(null), [onChange]);
  const go = useCallback(
    (dir) => onChange((index + dir + count) % count),
    [index, count, onChange]
  );

  // Keyboard, scroll lock and focus handling.
  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight' && count > 1) go(1);
      if (e.key === 'ArrowLeft' && count > 1) go(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [open, close, go, count]);

  // Preload neighbours so arrow navigation feels instant; keep the active thumb in view.
  useEffect(() => {
    if (!open) return;
    stageRef.current?.scrollTo({ top: 0 });
    [1, -1, 2].forEach((d) => {
      if (count > 1) {
        const img = new window.Image();
        img.src = viewSrc(images[(index + d + count) % count].src);
      }
    });
    thumbsRef.current?.querySelector(`[data-i="${index}"]`)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [open, index, images, count]);

  if (!open || typeof document === 'undefined') return null;

  const current = images[index];
  const src = viewSrc(current.src);
  const loaded = loadedSrc === src;
  const isScroll = Boolean(scrollable[src]);

  const onImageLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    const stage = stageRef.current;
    if (stage && w) {
      const fitWidth = Math.min(stage.clientWidth, 1280);
      const tall = (fitWidth * h) / w > stage.clientHeight * 1.25;
      if (tall) setScrollable((prev) => ({ ...prev, [src]: true }));
    }
    setLoadedSrc(src);
  };

  // Clicking the empty area around the image closes the viewer.
  const onStageClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null || count < 2) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return createPortal(
    <div
      className={styles.overlay}
      role='dialog'
      aria-modal='true'
      aria-label={title || 'Image viewer'}
    >
      <div className={styles.backdrop} onClick={close} aria-hidden='true' />

      <div className={styles.topbar}>
        <span className={styles.counter}>
          {title ? <strong>{title}</strong> : null}
          {count > 1 ? (
            <span>
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(count).padStart(2, '0')}
            </span>
          ) : null}
        </span>
        <button
          ref={closeRef}
          type='button'
          className={styles.iconBtn}
          onClick={close}
          aria-label='Close'
        >
          <LuX />
        </button>
      </div>

      <div
        ref={stageRef}
        className={`${styles.stage} ${isScroll ? styles.scroll : ''}`}
        onClick={onStageClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {!loaded ? (
          <LuLoader2 className={styles.spinner} aria-hidden='true' />
        ) : null}
        <img
          key={src}
          src={src}
          alt={current.alt || ''}
          className={`${styles.image} ${loaded ? styles.imageLoaded : ''}`}
          onLoad={onImageLoad}
          decoding='async'
        />
      </div>
      {isScroll && loaded ? (
        <span className={styles.scrollHint} aria-hidden='true'>
          Scroll to see the full page
        </span>
      ) : null}

      {count > 1 ? (
        <>
          <button
            type='button'
            className={`${styles.iconBtn} ${styles.nav} ${styles.prev}`}
            onClick={() => go(-1)}
            aria-label='Previous image'
          >
            <LuChevronLeft />
          </button>
          <button
            type='button'
            className={`${styles.iconBtn} ${styles.nav} ${styles.next}`}
            onClick={() => go(1)}
            aria-label='Next image'
          >
            <LuChevronRight />
          </button>

          <div className={styles.thumbs} ref={thumbsRef}>
            {images.map((img, i) => (
              <button
                key={img.src}
                type='button'
                data-i={i}
                className={`${styles.thumb} ${
                  i === index ? styles.thumbActive : ''
                }`}
                onClick={() => onChange(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
              >
                <img
                  src={optimizeUrl(img.src, { width: 160 })}
                  alt=''
                  loading='lazy'
                  decoding='async'
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>,
    document.body
  );
};

export default Lightbox;
