import React from 'react';

import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <div className='row'>
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
