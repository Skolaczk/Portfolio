import React from 'react';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import {
  AboutMeContent,
  MediumTitle,
  Wrapper,
  AboutWrapper,
} from './AboutMe.styles';
import Heading from '../../components/Heading/Heading';
import { useData } from '../../hooks/useData';
import Icons from '../../components/Icons/Icons';

const AboutMe = () => {
  const { allContentfulTechnologies, allContentfulTools } = useData();

  return (
    <SectionWrapper id='about-me'>
      <Heading
        title='About me'
        subtitle='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
      />
      <AboutWrapper>
        <div>
          <MediumTitle>Get to know me!</MediumTitle>
          <AboutMeContent>
            My name is Michał, I&apos;m 17 years old and I&apos;m from Poland,
            more precisely from the town of Koprzywnica. I got interested in
            programming two years ago, when I was studying HTML at school. Later
            I started learning other frontend technologies.
          </AboutMeContent>
          <AboutMeContent>
            Now, I&apos;m still learning and creating projects that you can see
            in the{' '}
            <a title='Projects' href='#projects'>
              projects
            </a>{' '}
            section or on{' '}
            <a
              title='Github projects'
              href='https://github.com/Skolaczk?tab=repositories'
            >
              Github
            </a>{' '}
            to become a junior front-end developer in the future.
          </AboutMeContent>
          <AboutMeContent>
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to{' '}
            <a title='Contact' href='#contact'>
              contact me
            </a>
            .
          </AboutMeContent>
        </div>
        <Wrapper>
          <div>
            <MediumTitle>My Skills</MediumTitle>
            <Icons data={allContentfulTechnologies.nodes} />
          </div>
          <div>
            <MediumTitle hasMargin>My Tools</MediumTitle>
            <Icons data={allContentfulTools.nodes} />
          </div>
        </Wrapper>
      </AboutWrapper>
    </SectionWrapper>
  );
};

export default AboutMe;
