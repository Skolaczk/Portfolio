import React, { useRef, useEffect } from 'react';
import { Button } from 'components/Button/Button.styles';
import gsap from 'gsap';
import { HeroWrapper, HeroContent, Paragraph } from './Hero.styles';

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
      },
    );
  }, []);

  return (
    <HeroWrapper ref={heroWrapper} id='home'>
      <Paragraph>Hi, my name is</Paragraph>
      <h1>Michał Skolak,</h1>
      <h2>Junior front-end developer.</h2>
      <HeroContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        repellat quia voluptatem nostrum illo sapiente commodi vel beatae ex id
        corrupti facere quos laudantium dignissimos alias! Nesciunt est vel
        quasi!
      </HeroContent>
      <a href='#projects'>
        <Button type='button'>Check out my Projects!</Button>
      </a>
    </HeroWrapper>
  );
};

export default Hero;
