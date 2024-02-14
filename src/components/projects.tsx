import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';

const projects = [
  {
    image: '/project-image.jpg',
    title: 'Audiophile',
    description:
      'Browser extension that records everything happening in application.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Zod', 'Supabase'],
    links: { preview: 'https://github.com/', github: 'https://github.com/' },
  },
  {
    image: '/project-image.jpg',
    title: 'Monito',
    description:
      'Browser extension that records everything happening in application.',
    technologies: [
      'React',
      'Styled-components',
      'TypeScript',
      'Yup',
      'Firebase',
    ],
    links: { preview: 'https://github.com/', github: 'https://github.com/' },
  },
  {
    image: '/project-image.jpg',
    title: 'SocialHub',
    description:
      'Browser extension that records everything happening in application.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Zod', 'Supabase'],
    links: { preview: 'https://github.com/', github: 'https://github.com/' },
  },
];

export const Projects = () => {
  return (
    <section className="my-8 sm:my-10">
      <SectionHeading
        heading="My projects"
        content="Projects I worked on. Due to nature of internet businesses not all of them are still online."
      />
      <div className="flex flex-col gap-8 md:flex-row">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
