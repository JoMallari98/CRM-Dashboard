import React from "react";
import { Box, Button, Hidden, Paper, styled } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRouter } from "next/router";
import {
  InvestorQuestions,
  useOnboarding,
} from "src/context/userOnBoardingContext";

const Question: React.FC = ({ children }) => {
  const router = useRouter();
  const { currentQuestion, goNextQuestion, goPrevQuestion } = useOnboarding();

  const navigateToSignUp = () => {
    router.replace("/onboarding/signup");
  };

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === InvestorQuestions.InvestmentGoal;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="stretch">
      <Hidden mdDown>
        {isFirstQuestion ? (
          <PrevButton
            variant="text"
            color="primary"
            onClick={navigateToSignUp}
            startIcon={<ArrowBackIos />}
          >
            Back to Sign Up
          </PrevButton>
        ) : (
          <PrevButton
            variant="text"
            color="primary"
            onClick={goPrevQuestion}
            startIcon={<ArrowBackIos />}
          >
            Previous question
          </PrevButton>
        )}
      </Hidden>
      <QuestionContainer elevation={0}>{children}</QuestionContainer>
      <Hidden mdDown>
        {isLastQuestion ? (
          <NextButton
            variant="text"
            color="primary"
            endIcon={<ArrowForwardIos />}
            onClick={goNextQuestion}
          >
            Create a profile
          </NextButton>
        ) : (
          <NextButton
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIos />}
            onClick={goNextQuestion}
          >
            Next question
          </NextButton>
        )}
      </Hidden>
    </Box>
  );
};

export default Question;

const QuestionContainer = styled(Paper)({
  padding: 64,
  borderRadius: 16,
});

const NavigationButton = styled(Button)({
  padding: 50,
  textTransform: "none",
});

const PrevButton = styled(NavigationButton)({
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
});

const NextButton = styled(NavigationButton)({
  borderBottomLeftRadius: 16,
  borderTopLeftRadius: 16,
});
