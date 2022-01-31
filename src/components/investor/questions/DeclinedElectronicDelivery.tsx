import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
  Paper,
  Hidden,
  Button,
  Stack,
} from '@mui/material';
import { useRouter } from 'next/router';
import { InvestorQuestions, useOnboarding } from 'src/context/userOnBoardingContext';

const DeclinedElectronicDelivery = () => {
  const router = useRouter();
  const { goToQuestion } = useOnboarding();

  const onDisagree = () => {
    router.push('/signup');
  };

  const onAgree = () => {
    goToQuestion(InvestorQuestions.WelcomePage);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
      <QuestionContainer>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontSize={22} mb={2} align="center">
            You have declined electronic delivery
          </Typography>
          <Container maxWidth="sm">
            <Typography mb={2} ml="10%" fontWeight={400} fontSize={14} width="80%" align="center">
              We are unable to continue your registration without your consent to the electronic
              delivery of documents.
            </Typography>
          </Container>
          <Stack direction="column" alignItems="center" spacing={2} mt={4}>
            <ConfirmationButton
              variant="contained"
              color="primary"
              onClick={onAgree}
              style={{ color: '#fff' }}
            >
              Consent to electronic delivery
            </ConfirmationButton>
            <ConfirmationButton
              sx={{ ml: 2 }}
              variant="outlined"
              color="primary"
              onClick={onDisagree}
            >
              Decline
            </ConfirmationButton>
          </Stack>
        </Box>
      </QuestionContainer>
    </Box>
  );
};

export default DeclinedElectronicDelivery;

const QuestionContainer = styled(Paper)({
  padding: 64,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  boxShadow: '6px 30px 51px rgba(10, 81, 143, 0.08)',
});

const ConfirmationButton = styled(Button)({
  width: 250,
  maxWidth: 250,
  height: 48,
  borderRadius: 8,
  textTransform: 'none',
});
