import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import WelcomeScreen from "src/components/investor/WelcomeScreen";

const WelcomePage = () => {
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
