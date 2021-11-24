import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import LogoBrandingSection from "../common/LogoBrandingSection";
import OnBoardingIntro from "../common/OnBoardingIntro";

const OnBoardingStep1 = () => {
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

export default OnBoardingStep1;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
