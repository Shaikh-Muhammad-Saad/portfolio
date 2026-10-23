import contentClient from '../contentful/client';
import { projectDetailsList } from '../data/projects';
import { site } from '../data/site';

const today = () => new Date().toISOString().slice(0, 10);

const urlEntry = (loc) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today()}</lastmod>
  </url>`;

function generateSiteMap(baseUrl, blogs) {
  const urls = [
    baseUrl,
    `${baseUrl}/blog`,
    ...projectDetailsList.map((p) => `${baseUrl}/project-details/${p.slug}`),
    ...blogs.map(({ fields }) => `${baseUrl}/blog-details/${fields?.slug}`),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map(urlEntry)
    .join('')}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ req, res }) {
  const baseUrl = site.url || `https://${req.headers.host}`;

  let blogs = [];
  try {
    blogs = (await contentClient.getBlogs())?.items ?? [];
  } catch {
    // The sitemap should still list the portfolio pages if Contentful is unreachable.
  }

  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSiteMap(baseUrl, blogs));
  res.end();

  return { props: {} };
}

export default SiteMap;
