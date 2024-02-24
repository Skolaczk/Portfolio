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
    image: '/projects/socialhub.svg',
    title: 'SocialHub',
    description:
      'Next-generation social media app, built with its own backend.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
    },
  },
  {
    image: '/projects/nextstarter.svg',
    title: 'Next-starter',
    description: 'Next.js starter template, packed with useful features.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn/ui',
      'Next-auth',
      'Prisma',
    ],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
    },
  },
  {
    image: '/projects/audiophile.svg',
    title: 'Audiophile',
    description: 'Online store specializing in headphones and speakers.',
    technologies: [
      'React',
      'Styled-components',
      'TypeScript',
      'Stripe',
      'Firebase',
    ],
    links: {
      preview: 'https://audiophile-ms.netlify.app/',
      github: 'https://github.com/Skolaczk/Audiophile',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Internship at WEB-BOX',
    location: 'Tarnobrzeg, PL',
    description:
      'During this internship, I created Wordpress plugins and managed website content and settings.',
    date: '2023',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      "With a background in graphic design utilizing Figma and web development skills in Next.js with Sanity CMS integration, I bring a hands-on approach to problem-solving and a commitment to meeting clients' unique requirements.",
    date: '2023 - present',
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
