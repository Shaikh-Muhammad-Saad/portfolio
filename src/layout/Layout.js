import Footer from './Footer';
import Navbar from './Navbar';
import ScrollTop from './ScrollTop';

const Layout = ({ children }) => (
  <>
    <a href='#main' className='skip-link'>
      Skip to content
    </a>
    <Navbar />
    <main id='main'>{children}</main>
    <Footer />
    <ScrollTop />
  </>
);

export default Layout;
