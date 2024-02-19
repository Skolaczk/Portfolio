'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  return (
    <section id="projects" className="my-8 scroll-mt-28 sm:my-10">
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
          content="Projects I worked on. Due to nature of internet businesses not all of them are still online."
        />
      </motion.div>
      <div className="flex flex-col gap-8 md:flex-row">
        {projectsData.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
