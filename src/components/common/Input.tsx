import React, { Key } from "react";
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
  placeholder?: string;
  fullWidth?: boolean;
  select?: Boolean;
  selectData?: string[];
}
const InputStyle = {
  height: "48px",
  borderColor: "rgba(10, 81, 143, 0.24)",
  borderRadius: "8px",
  fontSize: "14px",
};
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
        <Select displayEmpty id="demo-simple-select" style={{ ...InputStyle }}>
          {selectData?.map((item) => (
            <MenuItem value={item} key={item as Key}>
              {item}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <OutlinedInput
          placeholder={placeholder}
          fullWidth={fullWidth}
          style={{ ...InputStyle }}
        />
      )}
    </FormControl>
  );
};
const MyFormLabel = styled(FormLabel)`
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 6px;
`;

export default Input;
