'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import type { projectsData } from '@/lib/data';
import { cn } from '@/lib/utils';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex flex-col gap-5 rounded-sm border p-5 md:flex-row md:items-center md:gap-8 md:p-6"
    >
      <Link
        href={links.preview}
        aria-label={title}
        target="_blank"
        className="overflow-hidden rounded-sm md:w-1/2"
      >
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="w-full transition-transform hover:scale-105"
        />
      </Link>
      <div className="flex flex-col items-start md:w-1/2">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="my-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={links.preview}
            target="_blank"
            className={cn(buttonVariants(), 'gap-2')}
          >
            Live preview
            <Icons.preview className="size-4" />
          </Link>
          <Link
            href={links.github}
            target="_blank"
            className={cn(buttonVariants({ variant: 'outline' }), 'gap-2')}
          >
            GitHub
            <Icons.github className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
