import { Grid, styled } from "@mui/material";
import React from "react";
import LogoBrandingSection from "../common/LogoBrandingSection";
import SignUpForm from "../common/SignUpForm";

const OnBoardingStep3 = () => {
  return (
    <Wrapper>
      <Grid container alignItems="stretch" flexGrow={1}>
        <Grid item md={6}>
          <LogoBrandingSection description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </Grid>
        <Grid item md={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default OnBoardingStep3;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
