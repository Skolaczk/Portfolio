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
  const technologies = allContentfulTechnologies.nodes;
  const tools = allContentfulTools.nodes;

  return (
    <SectionWrapper id='about-me'>
      <Heading
        title='About me'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
        laborum ratione dignissimos.'
      />
      <AboutWrapper>
        <div>
          <MediumTitle>Get to know me!</MediumTitle>
          <AboutMeContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quam expedita maiores hic impedit nemo cumque fugit inventore quasi
            animi officiis pariatur! Dicta temporibus beatae et qui obcaecati
            voluptas reprehenderit? Tenetur modi pariatur dolor explicabo
            veritatis beatae iste rerum odio impedit, repudiandae non optio
            vitae eum maiores nobis alias quo iusto omnis adipisci! Aut ex fugit
            porro eveniet quo mollitia! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero, quam expedita maiores hic impedit nemo
            cumque fugit inventore quasi animi officiis pariatur! Dicta
            temporibus beatae et qui obcaecati voluptas reprehenderit? Tenetur
            modi pariatur dolor explicabo veritatis beatae iste rerum odio
            impedit, repudiandae non optio vitae eum maiores nobis alias quo
            iusto omnis adipisci! Aut ex fugit porro eveniet quo mollitia!
          </AboutMeContent>
        </div>
        <Wrapper>
          <div>
            <MediumTitle>My Skills</MediumTitle>
            <Icons data={technologies} />
          </div>
          <div>
            <MediumTitle isMargin>My Tools</MediumTitle>
            <Icons data={tools} />
          </div>
        </Wrapper>
      </AboutWrapper>
    </SectionWrapper>
  );
};

export default AboutMe;
