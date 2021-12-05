import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  styled,
  useRadioGroup,
} from "@mui/material";
import React from "react";

const StyledFormControlLabel = styled((props: FormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
  backgroundColor: theme.palette.white.main,
  borderRadius: 8,
  padding: "8px 16px",
  marginRight: 0,
  marginBottom: 16,
}));

export default function RepFormControlLabel(
  props: Omit<FormControlLabelProps, "control">
) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <StyledFormControlLabel checked={checked} {...props} control={<Radio />} />
  );
}
