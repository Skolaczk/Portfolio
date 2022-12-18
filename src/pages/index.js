import * as React from 'react';
import Footer from '../components/Footer/Footer';
import GalleryModal from '../components/GalleryModal/GalleryModal';
import Navigation from '../components/Navigation/Navigation';
import { SEO } from '../components/SEO/SEO';
import AboutMe from '../templates/AboutMe/AboutMe';
import Contact from '../templates/Contact/Contact';
import Hero from '../templates/Hero/Hero';
import Projects from '../templates/Projects/Projects';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <GalleryModal />
    </>
  );
};

export const Head = () => <SEO />;

export default Homepage;
