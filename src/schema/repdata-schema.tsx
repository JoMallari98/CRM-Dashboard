import { Asserts, object, string, TypeOf } from 'yup';

export const repDataSchema = object({
  firstName: string().required('First name is required.'),
  lastName: string().required('Last name is required.'),
  email: string().required('E-mail is required.').email('Invalid email format.'),
  riaName: string().required('RIA Name is required.'),
  mobileNumber: string().required('Cell/Office phone is required').length(10),
  crdNumber: string().required('CRD Number number is required'),
});

export type RepDataValues = Asserts<typeof repDataSchema>;
