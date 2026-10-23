import styles from './Blog.module.css';

import BlogCard from './BlogCard';

const BlogList = ({ blogs }) =>
  blogs?.length ? (
    <div className={styles.grid}>
      {blogs.map((blog, i) => (
        <BlogCard key={blog?.sys?.id ?? i} blog={blog} delay={(i % 3) * 80} />
      ))}
    </div>
  ) : (
    <p className={styles.empty}>No articles yet &mdash; check back soon.</p>
  );

export default BlogList;
