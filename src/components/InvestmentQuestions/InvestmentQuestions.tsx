import { Avatar, Typography } from "@mui/material";
import styled from "@mui/styled-engine";
import { Box } from "@mui/system";
import React from "react";
import {
  InvestorQuestions,
  useOnboarding,
} from "src/context/userOnBoardingContext";
import DeclinedElectronicDelivery from "./DeclinedElectronicDelivery";
import InvestmentExperience from "./InvestmentExperience";
import InvestmentGoal from "./InvestmentGoal";
import InvestmentStyle from "./InvestmentStyle";
import PrivacyPolicy from "./PrivacyPolicy";

const InvestmentQuestions = () => {
  const { currentQuestion } = useOnboarding();
  const getQuestionScreen = () => {
    const question = currentQuestion as InvestorQuestions;
    switch (question) {
      case InvestorQuestions.InvestmentExperience:
        return InvestmentExperience;
      case InvestorQuestions.InvestmentStyle:
        return InvestmentStyle;
      case InvestorQuestions.InvestmentGoal:
        return InvestmentGoal;
      case InvestorQuestions.ElectronicDeliveryConfirmation:
        return PrivacyPolicy;
      case InvestorQuestions.DeclinedElectronicDelivery:
        return DeclinedElectronicDelivery;
      default:
        return null;
    }
  };
  const CurrentQuestion = getQuestionScreen();
  return (
    <Wrapper>
      <Box display="flex" alignItems="center" mt={10}>
        <Avatar />
        <Typography variant="h6" ml={2} fontWeight="bold">
          LOGO
        </Typography>
      </Box>
      <Box>{CurrentQuestion && <CurrentQuestion />}</Box>
    </Wrapper>
  );
};

export default InvestmentQuestions;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
