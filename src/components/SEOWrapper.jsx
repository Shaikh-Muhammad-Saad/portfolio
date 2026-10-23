import Head from 'next/head';

import manifest from '@/src/data/image-manifest.json';
import { site } from '@/src/data/site';
import { optimizeUrl } from '@/src/lib/images';

const DEFAULT_TITLE = `${site.name} | Senior Software Engineer (MERN | PERN)`;
const DEFAULT_DESCRIPTION =
  'Software Engineer with 5 years of experience building robust, scalable full-stack web applications with the MERN and PERN stacks - Next.js, React.js, Node.js, Nest.js, MongoDB and PostgreSQL.';

const absolute = (url) =>
  url && url.startsWith('/') && site.url ? `${site.url}${url}` : url;

function SEOWrapper({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  type = 'website',
}) {
  const fullTitle = title ? `${title} | ${site.name}` : DEFAULT_TITLE;
  const ogImage = absolute(
    image
      ? optimizeUrl(image, { width: 1200, height: 630, crop: 'fill' })
      : manifest.og.src
  );

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, viewport-fit=cover'
      />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='software engineer, full stack developer, mern, pern, next.js, react, node.js, nest.js, mongodb, postgresql'
      />
      <meta name='author' content={site.name} />

      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={site.name} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      {ogImage ? <meta property='og:image' content={ogImage} /> : null}

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      {ogImage ? <meta name='twitter:image' content={ogImage} /> : null}
    </Head>
  );
}

export default SEOWrapper;
