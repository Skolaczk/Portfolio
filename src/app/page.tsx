import { ThemeToggle } from '@/components/theme-toggle';

const Home = () => {
  return (
    <>
      <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Next.js starter template
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          A Next.js starter template, packed with features like TypeScript,
          Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart
          your project with efficiency and style.
        </p>
      </section>
      <div className="fixed bottom-8 right-8">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Home;
