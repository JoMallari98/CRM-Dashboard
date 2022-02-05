import { Asserts, object, string, TypeOf } from 'yup';

export const PhoneDataSchema = object({
  // mobileNumber: string().required('Mobile number is required').length(10),
});

export type PhoneDataValues = Asserts<typeof PhoneDataSchema>;
