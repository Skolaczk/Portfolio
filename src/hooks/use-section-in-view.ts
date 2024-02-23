import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSection } from '@/components/active-section-provider';
import type { SectionName } from '@/lib/types';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
