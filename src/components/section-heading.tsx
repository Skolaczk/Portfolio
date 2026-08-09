import type { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-heading font-semibold text-3xl">{heading}</h2>
      {content && (
        <p className="mt-3 text-muted-foreground text-sm">{content}</p>
      )}
    </div>
  );
};
