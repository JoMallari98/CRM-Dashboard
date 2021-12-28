import React from "react";
import {
  FormControl,
  OutlinedInput,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
interface InputProps {
  label?: String;
  placeholder?: String;
  fullWidth?: Boolean;
  select?: Boolean;
  selectData?: String[];
}
const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  fullWidth = false,
  select,
  selectData,
}) => {
  return (
    <FormControl sx={{ width: fullWidth ? "100%" : "25ch" }}>
      <MyFormLabel>{label}</MyFormLabel>
      {select ? (
        <Select displayEmpty id="demo-simple-select">
          {selectData?.map((item) => (
            <MenuItem value={item as any} key={item as any}>
              {item}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <OutlinedInput
          placeholder={placeholder as any}
          fullWidth={fullWidth as any}
        />
      )}
    </FormControl>
  );
};
const MyFormLabel = styled(FormLabel)`
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 12px;
`;
export default Input;
