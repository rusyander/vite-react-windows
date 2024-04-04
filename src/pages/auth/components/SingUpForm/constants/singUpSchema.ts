import * as zod from 'zod';

export const signUpSchema = zod.object({
  email: zod.string().email({ message: 'Invalid email address' }),
  login: zod.string(),
  password: zod
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  passwordConfirmation: zod.string(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

export interface SingUpForm {
  email: string;
  password: string;
  passwordConfirmation: string;
  login: string;
  firstName?: string;
  lastName?: string;
  country: {
    id: number;
    label: string;
    code: string;
  };
}
