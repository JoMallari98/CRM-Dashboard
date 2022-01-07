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
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export default SignInPage;
