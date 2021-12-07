import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Onboarding from "public/OnboardingImage.svg";
import WelcomeScreen from "src/components/Investor/WelcomeScreen";

const WelcomePage = () => {
  console.log(Onboarding);
  return (
    <Container maxWidth="lg">
      <WelcomeScreen />
    </Container>
  );
};

export default WelcomePage;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
