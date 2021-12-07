import { Container } from "@mui/material";
import React from "react";
import InvestmentQuestions from "src/components/Investor/questions/InvestmentQuestions";

import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";

const QuestionsPage = () => {
  return (
    <OnBoardingContextProvider>
      <Container maxWidth="lg">
        <InvestmentQuestions />
      </Container>
    </OnBoardingContextProvider>
  );
};

export default QuestionsPage;
