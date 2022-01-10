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
  padding: 2rem 2rem;
`;
export default SignUpPage;
