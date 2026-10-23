import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, children, align = 'left', id }) => (
  <Reveal
    className={`section-heading ${
      align === 'center' ? 'section-heading--center' : ''
    }`}
  >
    {eyebrow ? <span className='eyebrow'>{eyebrow}</span> : null}
    <h2 id={id} className='section-title'>
      {title}
    </h2>
    {children ? <p className='section-lead'>{children}</p> : null}
  </Reveal>
);

export default SectionHeading;
