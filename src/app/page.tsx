import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { ThemeToggle } from '@/components/theme-toggle';

const Home = () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Intro />
        <div className="bg-muted h-16 w-1 rounded-full sm:my-5" />
        <About />
        <Projects />
        <Experience />
      </div>
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Home;
