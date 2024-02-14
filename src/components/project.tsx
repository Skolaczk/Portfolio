import Image from 'next/image';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

export const Project = (project: TProject) => {
  const { image, title, description, technologies, links } = project;

  return (
    <div className="bg-secondary rounded p-5">
      <div className="bg-muted w-fit rounded-full p-4">
        <Image src={image} alt={`${title} image`} width={32} height={32} />
      </div>
      <h3 className="my-2 text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="my-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="bg-muted rounded-full px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <Button variant="outline" asChild className="mr-2 px-5">
        <a href={links.preview}>
          <Icons.preview className="size-5" />
        </a>
      </Button>
      <Button variant="outline" asChild className="px-5">
        <a href={links.github}>
          <Icons.githubOutline className="size-5" />
        </a>
      </Button>
    </div>
  );
};
