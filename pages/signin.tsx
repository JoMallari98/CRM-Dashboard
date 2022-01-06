import { Container } from "@mui/material";
import React from "react";
import SignInScreen from "src/components/signin/SignInScreen";
import styled from "styled-components";

const SignInPage = () => {
  return (
    <Wrapper>
      <SignInScreen />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #f8fcff;
  padding: 0px 4rem;
`;
export default SignInPage;
