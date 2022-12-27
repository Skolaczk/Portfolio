import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { HeroWrapper, HeroContent, Paragraph } from './Hero.styles';
import { StyledLink } from '../../components/Link/Link.styles';

const Hero = () => {
  const heroWrapper = useRef(null);

  useEffect(() => {
    const wrapperElements = heroWrapper.current.children;

    gsap.fromTo(
      wrapperElements,
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'easeInOut',
        stagger: 0.1,
        duration: 1,
        delay: 0.25,
      }
    );
  }, []);

  return (
    <HeroWrapper ref={heroWrapper} id='home'>
      <Paragraph>Hi, my name is</Paragraph>
      <h1>Michał Skolak,</h1>
      <h2>Junior front-end developer.</h2>
      <HeroContent>
        I&apos;m 16 years old and I&apos;ve been learning programming for almost
        two years. I&apos;m still learning to find a job as a front-end
        developer in the future. Programming is my passion, so I try to devote
        every free moment to it.
      </HeroContent>
      <StyledLink title='Projects' href='#projects'>
        Check out my projects!
      </StyledLink>
    </HeroWrapper>
  );
};

export default Hero;
