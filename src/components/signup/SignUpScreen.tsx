import { Grid, styled } from "@mui/material";
import React from "react";
import LogoBrandingSection, {
  PageType,
} from "src/components/common/LogoBrandingSection";
import SignUpForm from "./SignUpForm";

const SignUpScreen = () => {
  return (
    <Wrapper>
      <Grid container alignItems="stretch" flexGrow={1}>
        <Grid item md={6}>
          <LogoBrandingSection type={PageType.SIGN_UP} />
        </Grid>
        <Grid item md={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SignUpScreen;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
