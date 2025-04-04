import { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-heading text-3xl font-semibold">{heading}</h2>
      {content && (
        <p className="text-muted-foreground mt-3 text-sm">{content}</p>
      )}
    </div>
  );
};
