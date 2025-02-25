import { z } from 'zod';

export const onBoardingSchema = z.object({
    bio: z.string().min(6, {message: 'Bio must contain at least 6 character(s)'}).max(55, { message: 'Bio must not contain more than 55 character(s)' }),
    phone: z.string(),
});