import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { error: 'Email is required' })
    .check(z.email({ error: 'Must be a valid email' })),
  message: z.string().min(1, { error: 'Message is required' }),
});

export type TFormSchema = z.infer<typeof formSchema>;
