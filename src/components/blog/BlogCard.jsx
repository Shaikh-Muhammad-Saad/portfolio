import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }) => {
  const blogData = blog?.fields;
  return (
    <div className='col-xl-4 col-md-6'>
      <div className='blog-item wow fadeInUp delay-0-2s'>
        <Link href={`/blog-details/${blogData?.slug}`}>
          <div className='image position-relative'>
            <img
              width={400}
              height={450}
              src={blogData?.blogImage?.fields?.file?.url}
              alt='Blog'
            />
          </div>
        </Link>
        <ul className='blog-meta'>
          <li>
            <i className='far fa-calendar-alt' />
            <Link legacyBehavior href={`/blog-details/${blogData?.slug}`}>
              <a>{moment(blog?.sys?.updatedAt).format('ll')}</a>
            </Link>
          </li>
          {blogData?.comments ? (
            <li>
              <i className='far fa-comments' />
              <Link legacyBehavior href={`/blog-details/${blogData?.slug}`}>
                <a>Comment ({blogData?.comments?.length})</a>
              </Link>
            </li>
          ) : null}
        </ul>
        <hr />
        <h4>
          <Link legacyBehavior href={`/blog-details/${blogData?.slug}`}>
            <a>{blogData?.title}</a>
          </Link>
        </h4>
        <Link legacyBehavior href={`/blog-details/${blogData?.slug}`}>
          <a className='read-more'>
            Read More <i className='far fa-arrow-right' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
