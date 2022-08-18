import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import Heading from '../../components/Heading/Heading';
import { ProjectBox } from './Projects.styles';
import GithubIcon from '../../assets/icons/github.svg';
import PreviewLinkIcon from '../../assets/icons/preview-link.svg';
import { useData } from '../../hooks/useData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { allContentfulProjects } = useData();
  const projects = allContentfulProjects.nodes;
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
        {projects.map(
          ({
            id,
            title,
            description,
            technologies,
            githubLink,
            previewLink,
            image,
          }) => (
            <ProjectBox key={id} imageSource={image.url}>
              <div>
                <h3>{title}</h3>
                <p>{description.description}</p>
                <ul>
                  {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a href={githubLink}>
                  <GithubIcon />
                </a>
                <a href={previewLink}>
                  <PreviewLinkIcon />
                </a>
              </div>
              <img src={image.url} alt='' />
            </ProjectBox>
          ),
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
