import { Asserts, object, string, TypeOf } from 'yup';

export const userDataSchema = object({
  firstName: string().required('First name is required.'),
  lastName: string().required('Last name is required.'),
  email: string().required('Email is required.').email('Invalid email format.'),
  // mobileNumber: string().required('Mobile number is required').length(10),
});

export type UserDataValues = Asserts<typeof userDataSchema>;
