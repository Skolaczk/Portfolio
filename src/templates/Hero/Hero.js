import React from 'react';
import { Button } from 'components/Button/Button.styles';
import { HeroWrapper, HeroContent, Paragraph } from './Hero.styles';

const Hero = () => {
  return (
    <HeroWrapper>
      <Paragraph>Hi, my name is</Paragraph>
      <h1>Michał Skolak,</h1>
      <h2>Front-end developer.</h2>
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
