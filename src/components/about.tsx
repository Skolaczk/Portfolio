'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';

export const About = () => {
  return (
    <motion.section
      id="about"
      className="my-8 flex w-full scroll-mt-28 flex-col items-center sm:my-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="max-w-2xl text-center leading-7">
        <p className="mb-4">
          After graduating with a degree in Accounting, I decided to pursue my
          passion for programming. I enrolled in a coding bootcamp and learned
          full-stack web development. My favorite part of programming is the
          problem-solving aspect. I love the feeling of finally figuring out a
          solution to a problem. My core stack is React, Next.js, Node.js, and
          MongoDB. I am also familiar with TypeScript and Prisma. I am always
          looking to learn new technologies. I am currently looking for a
          full-time position as a software developer.
        </p>
        <p>
          When I am not coding, I enjoy playing video games, watching movies,
          and playing with my dog. I also enjoy learning new things. I am
          currently learning about history and philosophy. I am also learning
          how to play the guitar.
        </p>
      </div>
    </motion.section>
  );
};
