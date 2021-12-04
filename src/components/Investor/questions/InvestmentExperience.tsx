import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Question from "../common/Question";
import SelectionButton from "../common/SelectionButton";
import { useOnboarding } from "src/context/userOnBoardingContext";
import { useRouter } from "next/router";

const possibleAnswers = [
  {
    value: 1,
    text: "None",
    icon: "☹️",
  },
  {
    value: 2,
    text: "Limited",
    icon: "😐",
  },
  {
    value: 3,
    text: "Good",
    icon: "😃",
  },
  {
    value: 4,
    text: "Extensive",
    icon: "😎",
  },
];

const InvestmentExperience = () => {
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const { currentQuestion } = useOnboarding();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const handleAnswer = (value: any) => {
    setCurrentAnswer(value);
  };
  const navigateToSignUp = () => {
    router.replace("/investor/signup");
  };
  return (
    <Box>
      <Box
        mt={7}
        mb={11}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5" fontWeight="bold" align="center">
          Almost done!
        </Typography>
        <Typography variant="body2" align="center" maxWidth={400}>
          We’d like to know more about you, please answer a few short questions
          to complete your profile
        </Typography>
      </Box>
      <Question
        onPrev={navigateToSignUp}
        prevText={"Back to Sign Up"}
        isStartQuestion={true}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" fontSize={18} mb={2} align="center">
            How would you rate your investment experience?
          </Typography>
          <Box
            display="flex"
            flexDirection={smDown ? "column" : "row"}
            justifyContent="space-around"
          >
            {possibleAnswers.map((answer) => {
              return (
                <SelectionButton
                  key={answer.text}
                  text={answer.text}
                  value={answer.value}
                  onSelect={handleAnswer}
                  selected={currentAnswer === answer.value}
                >
                  {answer.icon}
                </SelectionButton>
              );
            })}
          </Box>
        </Box>
      </Question>

      <Typography
        align="center"
        variant="body2"
        color="textSecondary"
        mt={11}
        mb={5}
      >
        Question {currentQuestion + 1} of 3
      </Typography>
      {}
    </Box>
  );
};

export default InvestmentExperience;
