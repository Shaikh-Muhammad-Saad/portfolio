import moment from 'moment';

import contentClient from '../contentful/client';

//pages/sitemap.xml.js
const EXTERNAL_BLOG_URL = 'https://usamairfan.com/blog-details';
const EXTERNAL_PROJECT_URL = 'https://usamairfan.com/project-details';

function generateSiteMap(blogs, projects) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://usamairfan.com</loc>
       <lastmod>${moment(new Date()).format('YYYY-MM-DD')}</lastmod>
     </url>
     <url>
       <loc>https://usamairfan.com/blog</loc>
       <lastmod>${moment(new Date()).format('YYYY-MM-DD')}</lastmod>
     </url>
     ${blogs
       .map(({ fields }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_BLOG_URL}/${fields?.slug}`}</loc>
           <lastmod>${moment(new Date()).format('YYYY-MM-DD')}</lastmod>
       </url>
     `;
       })
       .join('')}
      ${projects
        .map(({ fields }) => {
          return `
        <url>
            <loc>${`${EXTERNAL_PROJECT_URL}/${fields?.slug}`}</loc>
            <lastmod>${moment(new Date()).format('YYYY-MM-DD')}</lastmod>
        </url>
      `;
        })
        .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const projects = await contentClient.getProjects();
  const blogs = await contentClient.getBlogs();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogs?.items, projects?.items);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
