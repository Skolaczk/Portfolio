import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
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
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    date: '2021 - present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
