import React from 'react';
import { ImBook } from 'react-icons/im';
import { MdMapsHomeWork } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';



const timeline = [
  {
    "duration": "Jan 2023 - Present",
    "title": "MERN Stack Developer",
    "company": "TeamX Pakistan / TeamX Tec",
    "place": "Dubai",
    "description": "Developing large-scale web applications for UAE clients tailored to the UAE market, my responsibilities as a MERN Stack Developer include designing, building, and maintaining projects using Next.js, React.js, Nest.js, and MongoDB. I lead a team of 3 developers, ensuring seamless software integration and collaboration. My role involves close coordination with mobile developers for API integration, DevOps for efficient deployments, and SQA for continuous quality improvement. I also implement responsive UI/UX designs, develop RESTful APIs, optimize MongoDB schemas for high performance, and integrate third-party services to enhance application functionality.",
    "education": false,
    "linkText": "teamx.ae",
    "link": "https://teamx.ae/",
  },
  {
    "duration": "Nov 2021 - Jan 2023",
    "title": "MERN Stack Developer",
    "company": "Cognilium",
    "place": "Pakistan",
    "description": "My responsibilities as a MERN Stack Developer included designing and implementing web applications using MongoDB, Express.js, React.js, and Node.js. I developed RESTful APIs, managed database schemas, and created dynamic user interfaces. I led a team of 3 people, ensuring effective collaboration and successful project delivery. I worked closely with cross-functional teams to integrate frontend and backend components, optimized application performance, and resolved technical issues.",
    "education": false,
    "linkText": "Cognilium.ai",
    "link": "https://cognilium.ai/",
  },
  {
    "duration": "Sep 2020 - Oct 2021",
    "title": "React Developer",
    "company": "Softmeck",
    "place": "Pakistan",
    "description": "I developed and maintained web applications using React.js, Material UI, and Tailwind CSS. My role involved crafting responsive and visually engaging user interfaces and performing seamless API integrations to enhance application functionality. I successfully delivered tailored solutions that aligned with business needs and provided an exceptional user experience.",
    "education": false,
    "linkText": "Softmeck",
    "link": "https://www.softmeck.com/",
  },
  {
    "duration": "Feb 2018 - Mar 2022",
    "title": "Bachelors in Software Engineer",
    "company": "Iqra University",
    "place": "Pakistan",
    "description": "I earned my Bachelor's degree in Software Engineering in March 2022, where I developed a strong foundation in programming, software design, and engineering practices, equipping me with the skills needed to excel in the tech industry.",
    "education": true,
    "linkText": "education.iqra.edu.pk",
    "link": "https://education.iqra.edu.pk/",
  }
]



const WorkVerticalTimeline = () => {


  return (

    <VerticalTimeline>
      {timeline?.map((t) => (
        <VerticalTimelineElement
          key={t?.title}
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#3ba173', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #3ba173' }}
          date={t?.duration}
          iconStyle={{
            background: t.education ? '#f1b000' : '#3ba173',
            color: '#fff',
          }}
          icon={t?.education ? <ImBook /> : <MdMapsHomeWork />}
        >
          <h3 className='vertical-timeline-element-title'>{t?.title}</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            {t?.company}{' '}
            <span style={{ fontWeight: 'lighter' }}>- {t?.place}</span>
          </h4>
          <p className='comapny-link'><a href={t?.link} target='_blank' rel="noreferrer" >{t?.linkText}</a></p>
          <p>{t?.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default WorkVerticalTimeline;
