import { ArrowBack } from '@mui/icons-material';
import {
  Typography,
  IconButton,
  styled,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';

const ResetPasswordSuccess = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));
  const goToForgotPassword = () => {
    router.push('/reset-password');
  };

  const handleResetEmail = () => {
    // trugger email again from here....
    router.push('/reset-password');
  };

  const handleGoToSignIn = () => {
    setLoader(true);
    setTimeout(() => {
      router.push('/signin');
    }, 3000);
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <Box display="flex" alignItems="center" width="100%" pt={5} pl={5}>
        <IconButton onClick={goToForgotPassword}>
          <ArrowBack fontSize="small" />
        </IconButton>
      </Box>
      <FormSection maxWidth={mdUp ? '60%' : '80%'}>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" mt={20}>
          <Typography variant="h4" fontWeight="600" fontSize="24px" flexGrow={1} textAlign="center">
            Please use the link we emailed you to reset your password
          </Typography>

          <Typography
            mt={3}
            width="90%"
            variant="body2"
            fontWeight="normal"
            flexGrow={1}
            textAlign="center"
          >
            If you don’t receive anything, check your email’s spam, or{' '}
            <Box
              onClick={handleResetEmail}
              component="span"
              sx={{
                display: 'inline',
                cursor: 'pointer',
                color: '#009EF8',
              }}
            >
              click here
            </Box>{' '}
            to receive a new letter.
          </Typography>
        </Box>
        <Box>
          <ConfirmationButton
            variant="contained"
            color="primary"
            sx={{ px: 2, py: 1, my: 2, mt: 10, fontWeight: 600 }}
            type="submit"
            onClick={handleGoToSignIn}
          >
            Go back to Sign In{'  '}
            {loader && (
              <Image
                data-testid="loader"
                src="/assets/gifs/loader.gif"
                width="20px"
                height="20px"
                alt="loader"
              />
            )}
          </ConfirmationButton>
        </Box>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

const ConfirmationButton = styled(Button)(({ theme }) => ({
  width: 220,
  maxWidth: 210,
  height: 48,
  borderRadius: 8,
  marginTop: '10px',
  textTransform: 'none',
  color: '#ffff',
  [theme.breakpoints.down('sm')]: {
    width: 170,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export default ResetPasswordSuccess;
