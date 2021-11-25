import { InputBase, Paper } from "@mui/material";
import React from "react";

const CustomNumberInput = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        px: 1.75,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        width: 56,
        height: 64,
        borderRadius: 2,
        mx: 0.5,
        backgroundColor: "background.default",

        MozAppearance: "textfield",
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          fontSize: 40,
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
    </Paper>
  );
};

export default CustomNumberInput;
