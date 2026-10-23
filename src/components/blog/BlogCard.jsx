import moment from 'moment';
import Link from 'next/link';
import { LuArrowUpRight, LuCalendar } from 'react-icons/lu';

import styles from './Blog.module.css';

import Img from '@/src/components/ui/Img';
import Reveal from '@/src/components/ui/Reveal';

const BlogCard = ({ blog, delay }) => {
  const data = blog?.fields;
  const image = data?.blogImage?.fields?.file?.url;

  return (
    <Reveal as='article' delay={delay} className={styles.card}>
      <div className={styles.media}>
        {image ? (
          <Img
            src={image}
            alt={data?.title}
            widths={[480, 720, 960]}
            sizes='(max-width: 760px) 100vw, 400px'
          />
        ) : null}
      </div>
      <div className={styles.body}>
        <span className={styles.date}>
          <LuCalendar /> {moment(blog?.sys?.updatedAt).format('ll')}
        </span>
        <h2 className={styles.title}>
          <Link
            href={`/blog-details/${data?.slug}`}
            className={styles.stretched}
          >
            {data?.title}
          </Link>
        </h2>
        <span className={styles.more}>
          Read article <LuArrowUpRight />
        </span>
      </div>
    </Reveal>
  );
};

export default BlogCard;
