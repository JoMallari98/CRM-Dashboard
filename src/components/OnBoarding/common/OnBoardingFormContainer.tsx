import { Box, BoxProps, Paper, styled } from "@mui/material";
import React from "react";

const OnBoardingFormContainer: React.FC<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <StyledPaper elevation={0}>
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
      </StyledPaper>
    </Box>
  );
};

export default OnBoardingFormContainer;

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  flexGrow: 1,
  margin: "16px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    margin: 0,
  },
}));
