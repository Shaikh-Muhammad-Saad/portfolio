// Shared so a hovered card can prefetch exactly the file the details page will request.
export const COVER_WIDTHS = [640, 960, 1280, 1600, 2000, 2400];
export const COVER_MAX_CSS_WIDTH = 1200;

export const CARD_WIDTHS = [480, 720, 960, 1280];
export const GALLERY_WIDTHS = [400, 640, 960];
export const LIGHTBOX_WIDTH = 2000;

/** Mirrors the browser's srcset choice for an image rendered `cssWidth` px wide. */
export const pickWidth = (cssWidth, widths) => {
  const dpr =
    typeof window === 'undefined'
      ? 1
      : Math.min(window.devicePixelRatio || 1, 3);
  const target = cssWidth * dpr;
  return widths.find((w) => w >= target) || widths[widths.length - 1];
};
