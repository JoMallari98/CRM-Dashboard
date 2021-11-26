import { InputBase, Paper, styled } from "@mui/material";
import React from "react";

const CustomNumberInput = () => {
  return (
    <StyledPaper
      elevation={0}
      sx={{
        borderRadius: 2,
        mx: 0.5,
        backgroundColor: "background.default",
      }}
    >
      <StyledInput
        sx={{
          flex: 1,
          height: 48,
          width: 20,
          fontWeight: "bold",
          "input::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        }}
        inputProps={{
          "aria-label": "verification-code-digit",
          style: {
            textAlign: "center",
          },
          min: 0,
          max: 9,
          step: 1,
        }}
        type="number"
      />
    </StyledPaper>
  );
};

export default CustomNumberInput;

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  width: 56,
  height: 64,

  [theme.breakpoints.down("sm")]: {
    width: 40,
    height: 48,
  },
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  fontSize: 40,
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));
