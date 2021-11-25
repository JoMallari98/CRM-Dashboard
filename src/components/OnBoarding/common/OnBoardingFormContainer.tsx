import { Box, BoxProps, Paper, styled } from "@mui/material";
import React from "react";

const OnBoardingFormContainer: React.FC<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Paper sx={{ borderRadius: 4, m: 2, flexGrow: 1 }} elevation={0}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          height="100%"
          pt={10}
          pb={6}
          {...props}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

export default OnBoardingFormContainer;
