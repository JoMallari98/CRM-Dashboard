import { Asserts, object, string, TypeOf } from 'yup';

export const EmailDataSchema = object({
  email: string().required('Email is required.').email('Invalid email format'),
});

export type EmailDataValues = Asserts<typeof EmailDataSchema>;
