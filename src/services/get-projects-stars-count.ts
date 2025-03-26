import { projectsData } from '@/lib/data';

export const getProjectsStarsCount = async () => {
  return await Promise.all(
    projectsData.map(async ({ links }) => {
      const res = await fetch(links.githubApi, { cache: 'no-store' });
      const data = await res.json();
      return data.stargazers_count;
    })
  );
};
