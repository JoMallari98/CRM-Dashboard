import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Question from '../common/Question';
import SelectionButton from '../common/SelectionButton';
import { useOnboarding } from 'src/context/userOnBoardingContext';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const possibleAnswers = [
  {
    value: 1,
    text: 'None',
    icon: '/assets/images/â¹ï¸.png',
  },
  {
    value: 2,
    text: 'Limited',
    icon: '/assets/images/ð.png',
  },
  {
    value: 3,
    text: 'Good',
    icon: '/assets/images/ð.png',
  },
  {
    value: 4,
    text: 'Extensive',
    icon: '/assets/images/ð.png',
  },
];

const InvestmentExperience = () => {
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const { currentQuestion } = useOnboarding();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const handleAnswer = (value: any) => {
    setCurrentAnswer(value);
  };
  const navigateToSignUp = () => {
    router.push('/signup');
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
        <Typography variant="body2" align="center" fontSize="14px" fontWeight={400} maxWidth={400} mt={2}>
          Weâd like to know more about you, please answer a few short questions to complete your
          profile
        </Typography>
      </Box>
      <Question onPrev={navigateToSignUp} prevText={'Back to Sign Up'} isStartQuestion={true}>
        <MainQuestion display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" fontSize={18} fontWeight={500} mb={2} align="center">
            How would you rate your investment experience?
          </Typography>
          <Box
            display="flex"
            flexDirection={smDown ? 'column' : 'row'}
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
                  iconSrc={answer.icon}
                >
                </SelectionButton>
              );
            })}
          </Box>
        </MainQuestion>
      </Question>

      <Typography align="center" variant="body2" color="textSecondary" mt={11} mb={5}>
        Question {currentQuestion + 1} of 3
      </Typography>
      {}
    </Box>
  );
};

const MainQuestion = styled(Box)`
  background-color: #ffff;
`;

export default InvestmentExperience;
