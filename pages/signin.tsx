import { Container } from "@mui/material";
import React from "react";
import SignInScreen from "src/components/signin/SignInScreen";

const SignInPage = () => {
  return (
    <Container maxWidth="lg">
      <SignInScreen />
    </Container>
  );
};

export default SignInPage;
