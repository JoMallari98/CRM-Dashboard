import { Container } from "@mui/material";
import React from "react";
import SignUpScreen from "src/components/signup/SignUpScreen";
import styled from "styled-components";

const SignUpPage = () => {
  return (
    <Wrapper>
      <SignUpScreen />
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
export default SignUpPage;
