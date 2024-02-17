import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

export const About = () => {
  return (
    <section
      id="about"
      className="my-8 flex w-full scroll-mt-28 flex-col items-center sm:my-10"
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
      <div className="mt-8 flex w-full flex-wrap justify-center gap-10">
        <Icons.html className="size-12" />
        <Icons.css className="size-12" />
        <Icons.sass className="size-12" />
        <Icons.tailwind className="size-12" />
        <Icons.javascript className="size-12" />
        <Icons.typescript className="size-12" />
        <Icons.react className="size-12" />
        <Icons.redux className="size-12" />
        <Icons.nextjs className="size-12" />
        <Icons.nestjs className="size-12" />
        <Icons.prisma className="size-12" />
        <Icons.docker className="size-12" />
      </div>
    </section>
  );
};
