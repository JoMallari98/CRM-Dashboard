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
  padding: 0px 2rem;
`;
export default UserData;
