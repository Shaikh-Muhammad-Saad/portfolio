import Link from 'next/link';

import Nav from './Nav';
const Header2 = ({ singleMenu }) => {
  return (
    <header className='main-header menu-absolute'>
      {/*Header-Upper*/}
      <div className='header-upper'>
        <div className='container container-1620 clearfix'>
          <div className='header-inner rpy-10 rel d-flex align-items-center'>
            <div className='logo-outer ms-3'>
              <div className='logo'>
                <Link legacyBehavior href='/'>
                  <a className='d-flex justify-content-center align-items-center'>
                    <img
                      className=''
                      src='/assets/images/icons/code-icon.svg'
                      alt='Toggler'
                    />
                    <h5 className='p-0 m-0 ms-2'>Saad</h5>
                  </a>
                </Link>
              </div>
            </div>
            <div className='nav-outer ms-lg-auto clearfix'>
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className='menu-btns ms-lg-auto'>

              {/* menu sidbar */}
              <div className='menu-sidebar'>
                <button className='bg-transparent'>
                  <img
                    src='/assets/images/icons/toggler-white.svg'
                    alt='Toggler'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header2;
