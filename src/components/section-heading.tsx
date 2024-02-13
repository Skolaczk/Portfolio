type TProps = {
  heading: string;
  content?: string;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-5 text-center">
      <h2 className="text-3xl font-medium">{heading}</h2>
      <p>{content}</p>
    </div>
  );
};
