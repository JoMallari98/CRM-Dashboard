import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import WelcomeScreen from "src/components/Investor/WelcomeScreen";

const OnBoardingPage = () => {
  return (
    <Container maxWidth="lg">
      <WelcomeScreen />
    </Container>
  );
};

export default OnBoardingPage;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
