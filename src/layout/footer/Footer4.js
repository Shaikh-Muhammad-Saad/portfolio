import Link from 'next/link';

const Footer4 = () => {
  return (
    <footer
      className='main-footer footer-four pt-100 rel bgs-cover z-1'
      style={{
        backgroundImage: 'url(assets/images/footer/footer-bg-shape-three.png)',
      }}
    >
      <div className='container container-1290 pb-40'>
        <div className='row justify-content-between'>
          <div className='col-lg-5'>
            <div className='footer-widget footer-about wow fadeInUp delay-0-2s'>
              <div className='section-title mb-30'>
                <h2>Shaikh Muhammad</h2>
              </div>
              <div className='social-style-four'>
                <li>
                  <Link legacyBehavior href='/'>
                    <a>Home</a>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className='col-xl-2 col-lg-3 col-sm-4'>
            <div className='footer-widget footer-links wow fadeInUp delay-0-4s'>
              <h5 className='footer-title'>Socials</h5>
              <div className='footer-widget widget_nav_menu'>
                <ul className='list-style-two'>

                  <li>
                    <a href='https://www.linkedin.com/in/shaikh-muhammad-saad-7926a5207' target='_blank'>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/UsamaIrfan'>Github</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s'>
        <div className='container'>
          <p>
            Copyright @2023,{' '}
            <Link legacyBehavior href='/'>
              <a>Usama Irfan</a>
            </Link>{' '}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer4;
