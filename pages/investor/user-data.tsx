import { Container } from "@mui/material";
import React from "react";
import OnBoardingUserData from "src/components/investor/OnBoardingUserData";
import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";

const UserData = () => {
  return (
    <OnBoardingContextProvider>
      <Container maxWidth="lg">
        <OnBoardingUserData />
      </Container>
    </OnBoardingContextProvider>
  );
};

export default UserData;
