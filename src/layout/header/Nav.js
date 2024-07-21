import Link from 'next/link';
import { Accordion } from 'react-bootstrap';

import Menu from './Menu';
const Nav = () => {
  return (
    <nav className='main-menu navbar-expand-lg'>
      <Accordion>
        <div className='navbar-header py-10'>
          <div className='mobile-logo'>
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
          {/* Toggle Button */}
          <Accordion.Toggle
            as={'button'}
            className='navbar-toggle'
            eventKey='navbar-collapse'
          >
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey='navbar-collapse'
          className='navbar-collapse clearfix'
        >
          <Menu />
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
export default Nav;
