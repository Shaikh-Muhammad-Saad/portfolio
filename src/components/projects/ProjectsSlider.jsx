import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from './ProjectCard';
import { sliderProps } from '../../../src/helpers/sliderProps';
import projects from './project-slider-list';



const ProjectsSlider = () => {
  // const [projects, setProjects] = useState([]);

  // const getProjects = async () => {
  //   const response = await contentClient.getProjects();
  //   if (response) {
  //     setProjects(response?.items);
  //   }
  // };

  // useEffect(() => {
  //   getProjects();
  // }, []);

  return (
    <section id='projects' className='work-gallery-area pb-130 rpb-100'>
      <div className='container container-1290'>
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div className='section-title text-center mb-60 wow fadeInUp delay-0-2s'>
              <span className='sub-title mb-20'>Recent Works Gallery</span>
              <h2>
                I&rsquo;ve Completed 20+ Projects <br /> Take A Look At My Work
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <Swiper
          {...sliderProps.workGallerySliderActiveSwiper}
          className='work-gallery-active'
        >
          {projects?.map((p) => (
            //   <SwiperSlide
            //     key={p?.sys?.id}
            //     className='project-item style-four wow fadeInUp delay-0-2s'
            //   >
            //     <ProjectCard project={p?.fields} />
            //   </SwiperSlide>
            // ))}
            <SwiperSlide
              key={p?.id}
              className='project-item style-four wow fadeInUp delay-0-2s'
            >
              <ProjectCard project={p?.project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='work-gallery-controls'>
          <button className='work-gallery-prev slick-arrow'>
            <i className='far fa-chevron-left' />
          </button>
          <div className='work-gallery-dots'>
            <div className='slick-dots'></div>
          </div>
          <button className='work-gallery-next slick-arrow'>
            <i className='far fa-chevron-right' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
