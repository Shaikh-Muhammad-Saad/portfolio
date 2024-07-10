import Link from 'next/link';
import { Fragment } from 'react';
const Menu = () => {
  return (
    <Fragment>
      <SingleMenu />
    </Fragment>
  );
};
export default Menu;

const SingleMenu = () => {
  return (
    <ul className='navigation onepage clearfix'>
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
  );
};
