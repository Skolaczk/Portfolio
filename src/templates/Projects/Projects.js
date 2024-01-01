import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import Heading from '../../components/Heading/Heading';
import { StyledCenterLink, ProjectBox, Wrapper } from './Projects.styles';
import GithubIcon from '../../assets/icons/github.svg';
import PreviewLinkIcon from '../../assets/icons/preview-link.svg';
import { useData } from '../../hooks/useData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

gsap.registerPlugin(ScrollTrigger);
const isBrowser = typeof window !== 'undefined';

const Projects = () => {
  const [matchMedia, setMatchMedia] = useState(
    isBrowser ? window.matchMedia('(min-width: 615px)').matches : null
  );
  const { allContentfulProjects } = useData();
  const projects = allContentfulProjects.nodes;
  const wrapper = useRef(null);

  const getMediaMatches = () => {
    const { matches } = window.matchMedia('(min-width: 615px)');
    setMatchMedia(matches);
  };

  useEffect(() => {
    window.addEventListener('resize', getMediaMatches);

    return () => {
      window.removeEventListener('resize', getMediaMatches);
    };
  }, []);

  useEffect(() => {
    const wrapperElement = wrapper.current;

    if (matchMedia) {
      gsap.fromTo(
        wrapperElement.children,
        { x: '-=30px', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: 'easeInOut',
          stagger: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: wrapperElement,
            start: 'top 65%',
          },
        }
      );
    } else {
      [...wrapperElement.children].forEach((wrapperChildren) => {
        gsap.fromTo(
          wrapperChildren,
          { x: '-=30px', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'easeInOut',
            duration: 1,
            scrollTrigger: {
              trigger: wrapperChildren,
              start: 'top 65%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <SectionWrapper id='projects'>
      <Heading
        title='Projects'
        subtitle='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      />
      <Wrapper ref={wrapper}>
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
              <h4>{title}</h4>
              <p>{description.description}</p>
              <div>
                <ul>
                  {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a title='Github' href={githubLink} aria-label='github'>
                  <GithubIcon />
                </a>
                <a
                  title='Preview project'
                  href={previewLink}
                  aria-label='preview'
                >
                  <PreviewLinkIcon />
                </a>
              </div>
            </ProjectBox>
          )
        )}
      </Wrapper>
      <StyledCenterLink
        title='Github projects'
        href='https://github.com/Skolaczk?tab=repositories'
      >
        More projects
      </StyledCenterLink>
    </SectionWrapper>
  );
};

export default Projects;
