import { Grid, styled } from "@mui/material";
import React from "react";
import LogoBrandingSection from "src/components/common/LogoBrandingSection";
import SignInForm from "./SignInForm";

const SignInScreen = () => {
  return (
    <Wrapper>
      <Grid container direction="row">
        <Grid item md={6}>
          <LogoBrandingSection />
        </Grid>
        <Grid item md={6} alignSelf="stretch">
          <SignInForm />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SignInScreen;

const Wrapper = styled("div")({
  minHeight: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  background: "#F8FCFF",
  justifyContent: "center",
  alignItems: "center",
});
