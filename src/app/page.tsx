import { Intro } from '@/components/intro';
import { ThemeToggle } from '@/components/theme-toggle';

const Home = () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Intro />
        <div className="bg-secondary h-16 w-1 rounded-full" />
      </div>
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Home;
