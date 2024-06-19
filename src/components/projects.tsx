'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

type TProps = {
  starsCount: number[];
};

export const Projects = ({ starsCount }: TProps) => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="flex flex-col gap-8 md:flex-row">
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            project={project}
            index={index}
            starsCount={starsCount}
          />
        ))}
      </div>
    </section>
  );
};
