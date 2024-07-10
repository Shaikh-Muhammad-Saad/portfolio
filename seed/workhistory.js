const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: 'CFPAT--ZtGXvwpTV8QLwSCYjqn9Fe8HbWnOWzvSDF9DdKYXUs',
});

const spaceId = 'pbbsv189y80l';
const environmentId = 'master';

const timeline = [
  {
    duration: 'JAN 2023 - PRESENT',
    title: 'Senior Solutions Engineer',
    company: 'Mazik Global',
    place: 'Karachi- Hybrid',
    description:
      'Building and maintaining web applications for large scale businesses. \n Managing and building multiple projects, with technologies like .NET MVC, .NET EF, React, MS Dynamics/CRM etc.',
  },
  {
    duration: 'JAN 2023 - JAN 2024',
    title: 'Software Engineer',
    company: 'Digital Dividend Pakistan',
    place: 'Karachi',
    description:
      'Managing and building multiple projects, primarily focusing on MERN stack but also using technologies like Laravel, Angular, and PostgreSQL.',
  },
  {
    duration: 'MAY 2022 - DEC 2022',
    title: 'MERN Stack Developer',
    company: 'TeamX Pakistan',
    place: 'Karachi',
    description:
      'Collaborating with clients and Project managers building in house products and client projects. \n Working on both Front-end and Back-end technologies like Next.js, React.js, MongoDB, Nest.js',
  },
  {
    duration: 'JUN 2021 - FEB 2022',
    title: 'React / React-native Engineer',
    company: 'Tecizeverything',
    place: 'Karachi',
    description:
      'Working on complex and data intensive applications like CRMs and Hotel management systems. \n Building fast and SEO friendly E-commerce applications with eye-catching interfaces using technologies like Next.js, TailwindCSS, Node.js etc.',
  },
  {
    duration: 'JUN 2021 - DEC 2022',
    title: 'React / Front-end Developer',
    company: 'AiMachines',
    place: 'Remote',
    description:
      'Frontend react development, worked on a product based on React.js application including API integrations, IndexedDB, Data-intensive application and more.',
  },
  {
    duration: 'NOV 2020 - JUN 2021',
    title: 'React-native Developer',
    company: 'Code4Client',
    place: 'Karachi',
    description: 'Mobile application development',
  },
  {
    duration: 'JAN 2020 - PRESENT',
    title: 'Bachelors in Software Engineer',
    company: 'University of Karachi',
    place: 'Karachi',
    description: '',
  },
  {
    duration: 'NOV 2020 - JUN 2021',
    title: 'Pre-engineering',
    company: 'DJ Sindh Govt. Science College',
    place: 'Karachi',
    description: '',
  },
];

client
  .getSpace(spaceId)
  .then((space) => space.getEnvironment(environmentId))
  .then((environment) => {
    timeline.forEach((item) => {
      environment
        .createEntry('workExperience', {
          fields: {
            duration: {
              'en-US': item.duration,
            },
            title: {
              'en-US': item.title,
            },
            company: {
              'en-US': item.company,
            },
            place: {
              'en-US': item.place,
            },
            icon: {
              'en-US': {
                sys: {
                  type: 'Link',
                  linkType: 'Asset',
                  id: item.icon,
                },
              },
            },
            description: {
              'en-US': item.description,
            },
          },
        })
        .then((entry) => entry.publish())
        .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
        .catch(console.error);
    });
  })
  .catch(console.error);
