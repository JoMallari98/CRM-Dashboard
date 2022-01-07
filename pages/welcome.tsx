import { Container, Grid } from "@mui/material";
import React from "react";
import Onboarding from "public/OnboardingImage.svg";
import WelcomeScreen from "src/components/investor/WelcomeScreen";
import styled from "styled-components";
const WelcomePage = () => {
  console.log(Onboarding);
  return (
    <Wrapper>
      <WelcomeScreen />
    </Wrapper>
  );
};

export default WelcomePage;

const Wrapper = styled.div`
  padding: 2rem 2rem;
  background: #f8fcff;
`;
