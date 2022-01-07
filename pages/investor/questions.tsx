import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import InvestmentQuestions from "src/components/investor/questions/InvestmentQuestions";

import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";

const QuestionsPage = () => {
  return (
    <OnBoardingContextProvider>
      <Wrapper>
        <InvestmentQuestions />
      </Wrapper>
    </OnBoardingContextProvider>
  );
};
const Wrapper = styled.div`
  background: #f8fcff;
`;
export default QuestionsPage;
