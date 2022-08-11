import React from 'react';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import Heading from '../../components/Heading/Heading';
import { ProjectBox } from './Projects.styles';
import GithubIcon from '../../assets/icons/github.svg';
import PreviewLinkIcon from '../../assets/icons/preview-link.svg';
import Image from './image.jpg';

const Projects = () => {
  return (
    <SectionWrapper id='#projects'>
      <Heading
        title='Projects'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
        laborum ratione dignissimos.'
      />
      <div>
        <ProjectBox imageSource={Image}>
          <h3>Notes-app</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus qui
            maxime alias suscipit neque nobis blanditiis similique, voluptatem
            quisquam saepe fugiat laboriosam molestiae quod doloremque nihil
            voluptas dolorem, voluptatum vitae.
          </p>
          <ul>
            <li>React</li>
            <li>Styled-components</li>
            <li>Redux</li>
          </ul>
          <a href='https://github.com/Skolaczk'>
            <GithubIcon />
          </a>
          <a href='https://github.com/Skolaczk'>
            <PreviewLinkIcon />
          </a>
        </ProjectBox>
        <ProjectBox imageSource={Image}>
          <h3>Notes-app</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus qui
            maxime alias suscipit neque nobis blanditiis similique, voluptatem
            quisquam saepe fugiat laboriosam molestiae quod doloremque nihil
            voluptas dolorem, voluptatum vitae.
          </p>
          <ul>
            <li>React</li>
            <li>Styled-components</li>
            <li>Redux</li>
          </ul>
          <a href='https://github.com/Skolaczk'>
            <GithubIcon />
          </a>
          <a href='https://github.com/Skolaczk'>
            <PreviewLinkIcon />
          </a>
        </ProjectBox>
        <ProjectBox imageSource={Image}>
          <h3>Notes-app</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus qui
            maxime alias suscipit neque nobis blanditiis similique, voluptatem
            quisquam saepe fugiat laboriosam molestiae quod doloremque nihil
            voluptas dolorem, voluptatum vitae.
          </p>
          <ul>
            <li>React</li>
            <li>Styled-components</li>
            <li>Redux</li>
          </ul>
          <a href='https://github.com/Skolaczk'>
            <GithubIcon />
          </a>
          <a href='https://github.com/Skolaczk'>
            <PreviewLinkIcon />
          </a>
        </ProjectBox>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
