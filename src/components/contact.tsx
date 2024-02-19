'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { z } from 'zod';

import { sendEmail } from '@/actions/send-email';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: TFormSchema) => {
    const { data, error } = await sendEmail(values);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return (
    <motion.section
      id="contact"
      className="my-8 w-full scroll-mt-28 sm:my-10"
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
        content="Please contact me directly at skolakmichal1@gmail.com or through this form."
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full max-w-xl">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            {...register('email')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
          <textarea
            id="message"
            placeholder="Your message"
            {...register('message')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.email?.message && 'border-destructive'
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
