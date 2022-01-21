import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Question from '../common/Question';
import SelectionButton from '../common/SelectionButton';
import { useOnboarding } from 'src/context/userOnBoardingContext';

const InvestmentStyle = () => {
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const { currentQuestion } = useOnboarding();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const possibleAnswers = [
    {
      value: 1,
      text: 'Conservative',
      icon: '/conservative.png',
    },
    {
      value: 2,
      text: 'Moderately conservative',
      icon: '/moderately.png',
    },
    {
      value: 3,
      text: 'Moderate',
      icon: '/moderate.png',
    },
    {
      value: 4,
      text: 'Moderately aggressive',
      icon: '/mode_aggressive.png',
    },
    {
      value: 5,
      text: 'Aggressive',
      icon: '/aggressive.png',
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
      <Question>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontSize={18} mb={2} align="center">
            How would you describe your investment style?
          </Typography>
          <Box
            display="flex"
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
                  <img src={answer.icon} />
                </SelectionButton>
              );
            })}
          </Box>
        </Box>
      </Question>

      <Typography align="center" variant="body2" color="textSecondary" mt={11}>
        Question {currentQuestion + 1} of 3
      </Typography>
    </Box>
  );
};

export default InvestmentStyle;
