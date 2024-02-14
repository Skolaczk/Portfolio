import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  return (
    <section className="my-8 sm:my-10">
      <SectionHeading
        heading="My Projects"
        content="Projects I worked on. Due to nature of internet businesses not all of them are still online."
      />
      <div className="flex flex-col gap-8 md:flex-row">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
