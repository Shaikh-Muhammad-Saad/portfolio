import styles from './Projects.module.css';

import ProjectCard from '@/src/components/projects/ProjectCard';
import SectionHeading from '@/src/components/ui/SectionHeading';
import { projectDetailsList } from '@/src/data/projects';

// Bento rhythm on a 6-column grid: 2 wide, then rows of 3, closing with 2 wide.
const sizeFor = (i, total) => (i < 2 || i >= total - 2 ? 'lg' : 'md');

const Projects = () => (
  <section
    id='projects'
    className={`section ${styles.section}`}
    aria-labelledby='projects-title'
  >
    <div className='container'>
      <SectionHeading
        id='projects-title'
        eyebrow='Recent works gallery'
        title={
          <>
            I&rsquo;ve completed{' '}
            <span className='gradient-text'>20+ projects.</span>
          </>
        }
      >
        Take a look at my work &mdash; a selection of live products, from
        multi-vendor marketplaces and admin panels to booking platforms.
      </SectionHeading>

      <div className={styles.grid}>
        {projectDetailsList.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            size={sizeFor(i, projectDetailsList.length)}
            delay={(i % 3) * 80}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
