import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import OnBoardingStep1 from "src/components/OnBoarding/OnBoardingStep1";

const OnBoardingPage = () => {
  return (
    <Container maxWidth="lg">
      <OnBoardingStep1 />
    </Container>
  );
};

export default OnBoardingPage;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
