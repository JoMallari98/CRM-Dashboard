import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Stack, styled, Paper, Button } from '@mui/material';
import Image from 'next/image'
import {useRouter} from 'next/router';

const WelcomePage = () => {
    const router = useRouter();

    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
      <QuestionContainer>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontWeight={600} fontSize={24} mb={2} align="center">
              All set, let’s have some fun! 😉
          </Typography>
          <Image data-testid="welcome-image" src="/Welcome-Discover.png" width="250px" height="250px" alt="Welcome-Image"></Image>
          <Stack direction="column" alignItems="center" spacing={2} mt={4}>
            <ConfirmationButton
              variant="contained"
              color="primary"
              data-testid="discovering-btn"
              onClick={() => router.push("/dashboard")}
              style={{ color: '#fff' }}
            >
              Start discovering
            </ConfirmationButton>
          </Stack>
        </Box>
      </QuestionContainer>
    </Box>
    );
};

export default WelcomePage;

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