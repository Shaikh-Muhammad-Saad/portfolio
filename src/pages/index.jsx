import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import SEOWrapper from '../components/SEOWrapper';
import Layout from '../layout/Layout';

const Home = () => (
  <Layout>
    <SEOWrapper />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Contact />
  </Layout>
);

export default Home;
