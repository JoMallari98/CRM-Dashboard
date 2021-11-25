import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
type Props = TextFieldProps;
const CustomTextField: React.FC<Props> = (props) => {
  return (
    <TextField
      variant="outlined"
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: 2,
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
          marginTop: -4,
          paddingBottom: 0,
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
