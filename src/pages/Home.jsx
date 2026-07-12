import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Timeline from '../sections/Timeline';
import Education from '../sections/Education';
import Certificates from '../sections/Certificates';
import Achievements from '../sections/Achievements';
import Gallery from '../sections/Gallery';
// import Testimonials from '../sections/Testimonials';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTarget;
    if (target) {
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
      }, 100);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Timeline />
      <Education />
      <Certificates />
      <Achievements />
      <Gallery />
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
