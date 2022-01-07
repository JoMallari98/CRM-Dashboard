import React from "react";
import UserTypeScreen from "src/components/usertype/UserTypeScreen";
import styled from "styled-components";
import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";

const UserData = () => {
  return (
    <Wrapper>
      <UserTypeScreen />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #f8fcff;
  padding: 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default UserData;
