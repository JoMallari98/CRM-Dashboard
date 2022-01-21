import { Asserts, object, string, TypeOf } from 'yup';

const PASSWORD_REGEX =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
export const signInSchema = object({
  email: string().required('Email is required.').email('Invalid email format'),
  password: string()
    .required('Password is required.')
    .matches(
      PASSWORD_REGEX,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
});

export type SignInValues = Asserts<typeof signInSchema>;
