import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, projectImage, subTitle, slug } = project;
  return (
    <>
      <div className='image'>
        <img
          src={projectImage?.fields?.file?.url}
          alt='Work Gallery'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Link legacyBehavior href={`/project-details/${slug}`}>
          <a className='project-btn'>
            <i className='far fa-arrow-right' />
          </a>
        </Link>
      </div>
      <div className='content'>
        <Link legacyBehavior href={`/project-details/${slug}`}>
          <a className='category'>{subTitle}</a>
        </Link>
        <h4>
          <Link legacyBehavior href={`/project-details/${slug}`}>
            {title}
          </Link>
        </h4>
      </div>
    </>
  );
};

export default ProjectCard;
