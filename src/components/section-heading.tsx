import { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-medium tracking-tighter">{heading}</h2>
      {content && (
        <p className="text-muted-foreground mt-2 text-sm">{content}</p>
      )}
    </div>
  );
};
