import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-300 flex-col items-center px-8">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="hidden bg-background sm:fixed sm:right-8 sm:bottom-8 sm:flex" />
    </>
  );
};

export default HomePage;
