import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import RepOnBoarding from "src/components/rep/RepOnBoarding";

import { RepOnBoardingProvider } from "src/context/repOnBoardingContext";

const RepOnBoardingPage = () => {
  return (
    <RepOnBoardingProvider>
      <Container maxWidth="lg">
        <RepOnBoarding />
      </Container>
    </RepOnBoardingProvider>
  );
};

export default RepOnBoardingPage;
