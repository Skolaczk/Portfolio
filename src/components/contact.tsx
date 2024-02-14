import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

export const Contact = () => {
  return (
    <section className="my-8 w-full sm:my-10">
      <SectionHeading
        heading="Get In Touch"
        content="Please contact me directly at skolakmichal1@gmail.com or through this form."
      />
      <form className="flex flex-col items-center gap-5">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full max-w-xl rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-60 w-full max-w-xl resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        ></textarea>
        <Button size="lg">
          Submit <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </section>
  );
};
