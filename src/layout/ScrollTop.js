import { useEffect, useState } from 'react';
import { LuArrowUp } from 'react-icons/lu';

import styles from './ScrollTop.module.css';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type='button'
      aria-label='Back to top'
      className={`${styles.button} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      tabIndex={visible ? 0 : -1}
    >
      <LuArrowUp />
    </button>
  );
};

export default ScrollTop;
