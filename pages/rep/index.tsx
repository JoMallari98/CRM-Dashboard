import React from "react";
import RepOnBoarding from "src/components/rep/RepOnBoarding";
import styled from "styled-components";

import { RepOnBoardingProvider } from "src/context/repOnBoardingContext";

const RepOnBoardingPage = () => {
  return (
    <RepOnBoardingProvider>
      <Wrapper>
        <RepOnBoarding />
      </Wrapper>
    </RepOnBoardingProvider>
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
export default RepOnBoardingPage;
