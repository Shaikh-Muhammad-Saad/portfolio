import Link from 'next/link';

const DefaultFooter = () => {
  return (
    <footer
      className='main-footer rel z-1'
      style={{
        backgroundImage: 'url(assets/images/footer/footer-bg-shape.png)',
      }}
    >
      <div className='container container-1290'>
        <div className='footer-top pt-80 pb-60'>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <div className='logo'>
                <Link legacyBehavior href='/'>
                  <a>
                    <h3>Usama Irfan</h3>
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-8 text-lg-end'>
              <div className='social-style-four mb-20 wow fadeInLeft delay-0-2s animated'>
                <a
                  href='https://www.linkedin.com/in/usama-irfan'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-linkedin' /> <span>Linkedin</span>
                </a>
                <a href='https://github.com/UsamaIrfan'>
                  <i className='fab fa-github' /> <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='footer-left-content pt-80'>
              <div className='lets-work mb-50 wow fadeInUp delay-0-2s animated'>
                <img
                  src='assets/images/usamairfan-softwarengineer.png'
                  alt="Let's Work Man"
                />
                <span>Let’s Work Together</span>
              </div>
              <div className='footer-contact-info wow fadeInUp delay-0-3s animated'>
                <a
                  className='theme-btn style-three'
                  href='mailto:usama.irfan9791@gmail.com'
                >
                  usama.irfan9791@gmail.com <i className='far fa-arrow-right' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='footer-right-content'>
              <h4 className='footer-title wow fadeInUp delay-0-2s animated'>
                Quick Links
              </h4>
              <div className='footer-widget widget_nav_menu'>
                <ul className='list-style-two wow fadeInUp delay-0-3s animated'>
                  <li>
                    <Link legacyBehavior href='/#work'>
                      <a>Work History</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#projects'>
                      <a>Projects</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#contact'>
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/services'>
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='row align-items-center'>
            <div className='col-xl-8 col-lg-6'>
              <div className='footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated'>
                <ul>
                  <li>
                    <Link legacyBehavior href='/#home'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#about'>
                      <a>about</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#work'>
                      <a>Work history</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#projects'>
                      <a>Projects</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#certifications'>
                      <a>Certifications</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/#contact'>
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/blog'>
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated'>
                <p>
                  Copyright @2023,{' '}
                  <Link legacyBehavior href='/'>
                    <a>Usama Irfan</a>
                  </Link>{' '}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
