import { Container } from "@mui/material";
import React from "react";
import UserTypeScreen from "src/components/usertype/UserTypeScreen";
import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";

const UserData = () => {
  return (
    <Container maxWidth="lg">
      <UserTypeScreen />
    </Container>
  );
};

export default UserData;
