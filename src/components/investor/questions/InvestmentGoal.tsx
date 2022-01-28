import React, { useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Question from '../common/Question';
import SelectionButton from '../common/SelectionButton';
import { useOnboarding } from 'src/context/userOnBoardingContext';
import UpAndDowIcon from 'public/UpAndDown.svg';
const InvestmentGoal = () => {
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const { currentQuestion } = useOnboarding();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const possibleAnswers = [
    {
      value: 1,
      text: 'Generate income',
      icon: '💰️',
    },
    {
      value: 2,
      text: 'Grow my money',
      icon: '💸',
    },
    {
      value: 3,
      text: 'Protect my capital',
      icon: '🛡',
    },
    {
      value: 4,
      text: 'Minimize ups and downs',
      icon: <UpAndDowIcon />,
    },
  ];

  const handleAnswer = (value: any) => {
    setCurrentAnswer(value);
  };
  return (
    <Box>
      <Box mt={7} mb={11} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" fontWeight="bold" align="center">
          Almost done!
        </Typography>
        <Typography variant="body2" align="center" maxWidth={400}>
          We’d like to know more about you, please answer a few short questions to complete your
          profile
        </Typography>
      </Box>
      <Question nextText="Create a profile" isEndQuestion={true}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontSize={18} mb={2} align="center">
            What is most important to you when you invest?
          </Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection={smDown ? 'column' : 'row'}
            alignItems={smDown ? 'center' : 'flex-start'}
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

      <Typography align="center" variant="body2" color="textSecondary" mt={9}>
        Question {currentQuestion + 1} of 3
      </Typography>
    </Box>
  );
};

export default InvestmentGoal;
