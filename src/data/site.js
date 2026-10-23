export const site = {
  name: 'Shaikh Muhammad Saad',
  shortName: 'Saad',
  role: 'Software Engineer',
  email: 'smsidrees@gmail.com',
  phone: '+92 333 2311978',
  phoneHref: 'tel:+923332311978',
  location: 'Karachi, Pakistan',
  address: 'Gulshan-e-Iqbal Block 13D, Karachi.',
  linkedin: 'https://www.linkedin.com/in/shaikh-muhammad-saad-7926a5207',
  // Set this to your own GitHub profile URL to show the GitHub link across the site.
  github: null,
  // Used for absolute URLs in social previews. Set NEXT_PUBLIC_SITE_URL in your env.
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  heading: ['Professional &', 'Experienced Software Engineer'],
  paragraphs: [
    'A professional Software Engineer with 5 years of experience, proficient in cutting-edge technologies such as the MERN stack and PERN stack. With a proven track record in both web and mobile development, I specialize in delivering robust, scalable, and efficient digital solutions.',
    'As an industry-savvy professional, I stay ahead of tech trends, ensuring my projects enhance user experience and fulfill business objectives. Expert in JavaScript-based technologies and problem-solving, I ensure my work drives digital innovation.',
  ],
  focus: [
    {
      icon: 'web',
      title: 'Web Development',
      text: 'React.js, Next.js, TypeScript',
    },
    {
      icon: 'server',
      title: 'Backend Development',
      text: 'Node.js, Express.js, Nest.js, REST APIs',
    },
    {
      icon: 'design',
      title: 'UI/UX Designing',
      text: 'Responsive, user-centric interfaces',
    },
    {
      icon: 'database',
      title: 'SQL / NoSQL Database',
      text: 'MongoDB, PostgreSQL, Prisma',
    },
  ],
};

export const stats = [
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 20, suffix: '+', label: 'Projects completed' },
  { value: 5, suffix: '', label: 'Companies' },
  { value: 3, suffix: '', label: 'Developers led' },
];

// Rotating words in the hero tagline - each one is backed by real projects below.
export const heroWords = [
  'web platforms',
  'multi-vendor marketplaces',
  'admin dashboards',
  'REST APIs',
];
