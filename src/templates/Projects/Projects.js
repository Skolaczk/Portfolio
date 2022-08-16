import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import Heading from '../../components/Heading/Heading';
import { ProjectBox } from './Projects.styles';
import GithubIcon from '../../assets/icons/github.svg';
import PreviewLinkIcon from '../../assets/icons/preview-link.svg';
import Image from './image.jpg';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const wrapperElements = wrapper.current.children;

    [...wrapperElements].forEach((wrapperElement) => {
      gsap.fromTo(
        wrapperElement,
        { y: '-=25', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'easeInOut',
          stagger: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: wrapperElement,
            start: 'top 75%',
          },
        },
      );
    });
  }, []);

  return (
    <SectionWrapper id='projects'>
      <Heading
        title='Projects'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
        laborum ratione dignissimos.'
      />
      <div ref={wrapper}>
        <ProjectBox imageSource={Image}>
          <div>
            <h3>Notes-app</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              qui maxime alias suscipit neque nobis blanditiis similique,
              voluptatem quisquam saepe fugiat laboriosam molestiae quod
              doloremque nihil voluptas dolorem, voluptatum vitae.
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
          </div>
          <img src={Image} alt='' />
        </ProjectBox>
        <ProjectBox imageSource={Image}>
          <div>
            <h3>Notes-app</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              qui maxime alias suscipit neque nobis blanditiis similique,
              voluptatem quisquam saepe fugiat laboriosam molestiae quod
              doloremque nihil voluptas dolorem, voluptatum vitae.
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
          </div>
          <img src={Image} alt='' />
        </ProjectBox>
        <ProjectBox imageSource={Image}>
          <div>
            <h3>Notes-app</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              qui maxime alias suscipit neque nobis blanditiis similique,
              voluptatem quisquam saepe fugiat laboriosam molestiae quod
              doloremque nihil voluptas dolorem, voluptatum vitae.
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
          </div>
          <img src={Image} alt='' />
        </ProjectBox>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
