import { Asserts, object, string } from 'yup';

export const resetPasswordSchema = object({
  email: string().required('E-mail is required.').email('Invalid email format.'),
});

export type ResetPasswordValues = Asserts<typeof resetPasswordSchema>;
