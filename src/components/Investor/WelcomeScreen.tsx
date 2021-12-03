import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import LogoBrandingSection from "../common/LogoBrandingSection";
import OnBoardingIntro from "src/components/common/OnBoardingIntro";

const WelcomeScreen = () => {
  return (
    <Wrapper>
      <Grid container alignItems="stretch" flexGrow={1}>
        <Grid item md={6}>
          <LogoBrandingSection />
        </Grid>
        <Grid item md={6}>
          <OnBoardingIntro />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default WelcomeScreen;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
