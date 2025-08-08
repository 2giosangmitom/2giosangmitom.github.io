import z from 'zod';

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(5, 'Full name must be at least 5 characters long.')
    .max(50, 'Full name must be less than 50 characters.'),

  email: z.email('Please enter a valid email address.').max(100, 'Email must be less than 100 characters.'),

  topic: z
    .string()
    .trim()
    .min(5, 'Topic must be at least 5 characters long.')
    .max(50, 'Topic must be less than 50 characters.'),

  message: z
    .string()
    .trim()
    .min(20, 'Message must be at least 20 characters long.')
    .max(1000, 'Message must be less than 1000 characters.')
});
