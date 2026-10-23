import manifest from './image-manifest.json';

const logo = (name) => manifest[`skills/${name}`];

export const skillsIntro =
  'Demonstrating expertise in building full-stack web applications using the MERN | PERN stack (MongoDB, PostgreSQL, Express.js, React.js, Node.js). From designing robust back-end architectures and managing databases to crafting responsive and dynamic front-end user interfaces, I specialize in delivering seamless and scalable solutions. My projects highlight the integration of modern technologies to create efficient, user-centric applications.';

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', logo: logo('react') },
      { name: 'Next.js', logo: logo('next') },
      { name: 'TypeScript', logo: logo('typescript') },
      { name: 'JavaScript', logo: logo('skill4') },
      { name: 'Tailwind', logo: logo('tailwind') },
      { name: 'Material UI', logo: logo('materialUI') },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', logo: logo('node') },
      { name: 'Express.js', logo: logo('express') },
      { name: 'Nest.js', logo: logo('nestjs') },
      { name: 'Prisma', logo: logo('prisma') },
      { name: 'Mongoose', logo: logo('mongoose') },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', logo: logo('mongodb') },
      { name: 'PostgreSQL', logo: logo('postgresql') },
      { name: 'Firebase', logo: logo('firebase') },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Docker', logo: logo('docker') },
      { name: 'AWS EC2', logo: logo('aws') },
      { name: 'Vercel', logo: logo('vercel') },
      { name: 'Cloudflare', logo: logo('cloudflare') },
      { name: 'NGINX', logo: logo('nginx') },
      { name: 'Ubuntu', logo: logo('ubuntu') },
    ],
  },
];

export const techList = [
  'JavaScript',
  'TypeScript',
  'React Js',
  'Next Js',
  'Node Js',
  'Express Js',
  'Nest Js',
  'MongoDB',
  'Rest APIs',
  'Docker',
  'Ubuntu',
  'NGINX',
  'Material UI',
  'Tailwind',
  'Sass',
  'HTML',
  'CSS',
];
