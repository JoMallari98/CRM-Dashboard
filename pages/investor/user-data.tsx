import { Container } from "@mui/material";
import React from "react";
import OnBoardingUserData from "src/components/investor/OnBoardingUserData";
import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";
import styled from "styled-components";

const UserData = () => {
  return (
    <OnBoardingContextProvider>
      <Wrapper>
        <OnBoardingUserData />
      </Wrapper>
    </OnBoardingContextProvider>
  );
};
const Wrapper = styled.div`
  background: #f8fcff;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  height: 100vh !important;
`;
export default UserData;
