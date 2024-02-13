import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';

export const Intro = () => {
  return (
    <section className="my-10 flex flex-col items-center gap-4 text-center">
      <a href="#" className="bg-muted rounded px-3 py-1 text-sm font-medium">
        🎉
        <span className="ml-3">Check out my new project</span>
      </a>
      <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
        Software developer with a passion for design
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aliquid commodi consequatur culpa, delectus dolore esse, eum laborum nam
        nihil quaerat quas!
      </p>
      <div className="flex flex-row gap-2">
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
      </div>
    </section>
  );
};
