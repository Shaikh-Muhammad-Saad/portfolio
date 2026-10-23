const CLOUDINARY_UPLOAD = '/image/upload/';

export const isCloudinary = (url) =>
  typeof url === 'string' &&
  url.includes('res.cloudinary.com') &&
  url.includes(CLOUDINARY_UPLOAD);

const isContentful = (url) =>
  typeof url === 'string' && url.includes('ctfassets.net');

/**
 * Returns a resized, auto-format (AVIF/WebP), auto-quality version of a remote image.
 * Cloudinary and Contentful URLs are transformed on their CDNs; anything else is returned untouched.
 */
export const optimizeUrl = (
  url,
  { width, height, crop = 'limit', quality = 'auto', effect } = {}
) => {
  if (!url) return url;

  if (isCloudinary(url)) {
    const t = ['f_auto', `q_${quality}`, `c_${crop}`, 'dpr_1'];
    if (width) t.push(`w_${width}`);
    if (height) t.push(`h_${height}`);
    if (effect) t.push(effect);
    return url.replace(
      CLOUDINARY_UPLOAD,
      `${CLOUDINARY_UPLOAD}${t.join(',')}/`
    );
  }

  if (isContentful(url)) {
    const abs = url.startsWith('//') ? `https:${url}` : url;
    const params = new URLSearchParams({
      fm: 'webp',
      q: quality === 'auto' ? '75' : String(quality),
    });
    if (width) params.set('w', String(width));
    if (height) params.set('h', String(height));
    return `${abs}?${params.toString()}`;
  }

  return url;
};

export const canOptimize = (url) => isCloudinary(url) || isContentful(url);

export const buildSrcSet = (url, widths) =>
  widths.map((w) => `${optimizeUrl(url, { width: w })} ${w}w`).join(', ');

// ~1KB blurred preview shown while the real image streams in.
export const placeholderUrl = (url) =>
  isCloudinary(url)
    ? optimizeUrl(url, { width: 40, quality: 30, effect: 'e_blur:300' })
    : null;

const prefetched = new Set();

/** Warms the browser cache for an image (e.g. when hovering a link to the page that shows it). */
export const prefetchImage = (url, width = 1600) => {
  if (typeof window === 'undefined' || !url) return;
  const href = optimizeUrl(url, { width });
  if (prefetched.has(href)) return;
  prefetched.add(href);
  const img = new window.Image();
  img.decoding = 'async';
  img.src = href;
};
