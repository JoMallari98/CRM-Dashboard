import { TextFieldProps } from '@mui/material';
import TextField from 'src/components/common/formik/TextField';
import React from 'react';
type Props = TextFieldProps & { name: string };
const CustomTextFieldForSignUpForm = (props: Props) => {
  return (
    <TextField
      variant="outlined"
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: 2,
          // border: "1px solid #002E77"
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #002E77 !important',
          borderRadius: '8px',
        },
        '& .MuiInputLabel-formControl': {
          color: 'rgba(1, 1, 1, 1)',
        },
      }}
      inputProps={{
        style: {
          paddingTop: 12.5,
          paddingBottom: 12.5,
        },
      }}
      InputLabelProps={{
        style: {
          marginTop: 0,
          paddingBottom: 0,
        },
      }}
      {...props}
    />
  );
};

export default CustomTextFieldForSignUpForm;
