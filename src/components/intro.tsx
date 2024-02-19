'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';

export const Intro = () => {
  return (
    <section
      id="home"
      className="my-8 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:my-10"
    >
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
        href="#"
        className="bg-muted rounded px-3 py-1 text-sm font-medium"
      >
        🎉
        <span className="ml-3">Check out my new project</span>
      </motion.a>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        Software developer with a passion for design
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-2xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aliquid commodi consequatur culpa, delectus dolore esse, eum laborum nam
        nihil quaerat quas!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex"
          asChild
        >
          <a href="/michalskolak.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a href="/michalskolak.pdf" download>
            <Icons.linkedin className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a href="/michalskolak.pdf" download>
            <Icons.github className="size-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
