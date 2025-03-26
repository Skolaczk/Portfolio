'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { sendEmailAction } from '@/actions/send-email';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: TFormSchema) => {
    const { data, error } = await sendEmailAction(values);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <Button
              variant="link"
              className="text-muted-foreground p-0 font-medium"
            >
              <a
                className="underline-offset-4 hover:underline"
                href="mailto:skolakmichal1@gmail.com"
              >
                skolakmichal1@gmail.com
              </a>
            </Button>{' '}
            or through this form.
          </>
        }
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full max-w-xl">
          <label
            htmlFor="email"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.email?.message && 'text-destructive'
            )}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@gmail.com"
            {...register('email')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.email?.message && 'border-destructive'
            )}
          />
          {errors.email?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="message"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.message?.message && 'text-destructive'
            )}
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hello! What's up?"
            {...register('message')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.message?.message && 'border-destructive'
            )}
          ></textarea>
          {errors.message?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.message?.message}
            </p>
          )}
        </div>
        <Button size="lg">
          Submit <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  );
};
