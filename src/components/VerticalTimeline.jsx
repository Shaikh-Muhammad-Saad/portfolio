import React from 'react';
import { ImBook } from 'react-icons/im';
import { MdMapsHomeWork } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

const WorkVerticalTimeline = ({ timeline }) => {
  return (
    <VerticalTimeline>
      {timeline
        ?.sort((a, b) => a.order - b.order)
        .map(({ fields: t }) => (
          <VerticalTimelineElement
            key={t?.title}
            className='vertical-timeline-element--work'
            contentStyle={{ background: '#3ba173', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3ba173' }}
            date={t.duration}
            iconStyle={{
              background: t.education ? '#f1b000' : '#3ba173',
              color: '#fff',
            }}
            icon={t.education ? <ImBook /> : <MdMapsHomeWork />}
          >
            <h3 className='vertical-timeline-element-title'>{t.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              {t.company}{' '}
              <span style={{ fontWeight: 'lighter' }}>- {t.place}</span>
            </h4>
            <p>{t.description}</p>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
};

// const timeline = [
//   {
//     duration: 'JAN 2023 - PRESENT',
//     title: 'Senior Solutions Engineer',
//     company: 'Mazik Global',
//     place: 'Karachi- Hybrid',
//     icon: <MdMapsHomeWork />,
//     description:
//       'Building and maintaining web applications for large scale businesses. \n Managing and building multiple projects, with technologies like .NET MVC, .NET EF, React, MS Dynamics/CRM etc.',
//   },
//   {
//     duration: 'JAN 2023 - JAN 2024',
//     title: 'Software Engineer',
//     company: 'Digital Dividend Pakistan',
//     place: 'Karachi',
//     icon: <MdMapsHomeWork />,
//     description:
//       'Managing and building multiple projects, primarily focusing on MERN stack but also using technologies like Laravel, Angular, and PostgreSQL.',
//   },
//   {
//     duration: 'MAY 2022 - DEC 2022',
//     title: 'MERN Stack Developer',
//     company: 'TeamX Pakistan',
//     place: 'Karachi',
//     icon: <MdMapsHomeWork />,
//     description:
//       'Collaborating with clients and Project managers building in house products and client projects. \n Working on both Front-end and Back-end technologies like Next.js, React.js, MongoDB, Nest.js',
//   },
//   {
//     duration: 'JUN 2021 - FEB 2022',
//     title: 'React / React-native Engineer',
//     company: 'Tecizeverything',
//     place: 'Karachi',
//     icon: <MdMapsHomeWork />,
//     description:
//       'Working on complex and data intensive applications like CRMs and Hotel management systems. \n Building fast and SEO friendly E-commerce applications with eye-catching interfaces using technologies like Next.js, TailwindCSS, Node.js etc.',
//   },
//   {
//     duration: 'JUN 2021 - DEC 2022',
//     title: 'React / Front-end Developer',
//     company: 'AiMachines',
//     place: 'Remote',
//     icon: <MdMapsHomeWork />,
//     description:
//       'Frontend react development, worked on a product based on React.js application including API integrations, IndexedDB, Data-intensive application and more.',
//   },
//   {
//     duration: 'NOV 2020 - JUN 2021',
//     title: 'React-native Developer',
//     company: 'Code4Client',
//     place: 'Karachi',
//     icon: <MdMapsHomeWork />,
//     description: 'Mobile application development',
//   },
//   {
//     duration: 'JAN 2020 - PRESENT',
//     title: 'Bachelors in Software Engineer',
//     company: 'University of Karachi',
//     place: 'Karachi',
//     icon: <ImBook />,
//     education: true,
//   },
//   {
//     duration: 'NOV 2020 - JUN 2021',
//     title: 'Pre-engineering',
//     company: 'DJ Sindh Govt. Science College',
//     place: 'Karachi',
//     icon: <ImBook />,
//     education: true,
//   },
// ];

export default WorkVerticalTimeline;
