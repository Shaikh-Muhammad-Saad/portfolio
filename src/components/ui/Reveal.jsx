import { createElement, useEffect, useRef } from 'react';

let observer;
const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
  }
  return observer;
};

/** Fades/slides its children in the first time they scroll into view. */
const Reveal = ({
  as = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return undefined;
    }
    const io = getObserver();
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return createElement(
    as,
    {
      ref,
      'data-reveal': '',
      className,
      style: delay ? { '--reveal-delay': `${delay}ms` } : undefined,
      ...rest,
    },
    children
  );
};

export default Reveal;
