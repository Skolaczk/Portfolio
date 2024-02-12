import { Intro } from '@/components/intro';
import { ThemeToggle } from '@/components/theme-toggle';

const Home = () => {
  return (
    <>
      <div className="container">
        <Intro />
      </div>
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Home;
