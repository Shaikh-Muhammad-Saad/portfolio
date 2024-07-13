import Head from 'next/head';

function SEOWrapper({ title, description, keywords, author, image }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />

        {/* Open Graph */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        {image && <meta property='og:image' content={image} />}

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        {image && <meta name='twitter:image' content={image} />}
      </Head>
    </>
  );
}

SEOWrapper.defaultProps = {
  title: 'Shaikh Muhammad Saad - Web Developer',
  description:
    'Passionate Software Engineer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with proven expertise in CMS integration and robust full-stack applications. Explore a diverse portfolio showcasing innovative mobile solutions and dynamic web projects, reflecting a dedication to top-tier development standards and cutting-edge technologies.',
  keywords:
    'software, engineer, web development, mern, mongodb, nodejs, reactjs, technology',
  author: 'Saad',
  image: '/assets/images/about/me.jpeg',
};

export default SEOWrapper;
