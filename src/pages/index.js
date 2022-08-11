import * as React from 'react';
import AboutMe from '../templates/AboutMe/AboutMe';
import Contact from '../templates/Contact/Contact';
import Hero from '../templates/Hero/Hero';
import Projects from '../templates/Projects/Projects';

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;
