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
import React from 'react';
import { useRouter } from 'next/router';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';

const ResetPasswordSuccess = () => {
  const router = useRouter();

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));
  const goToForgotPassword = () => {
    router.push('/reset-password');
  };

  const handleResetEmail = () => {
    // trugger email again from here....
    router.push('/reset-password');
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <Box display="flex" alignItems="center" width="100%" pt={5} pl={5}>
        <IconButton onClick={goToForgotPassword}>
          <ArrowBack fontSize="small" />
        </IconButton>
      </Box>
      <FormSection maxWidth={mdUp ? '56%' : '80%'}>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" mt={20}>
          <Typography variant="h5" fontWeight="bold" flexGrow={1} textAlign="center">
            We’ve sent you a letter with reset password link
          </Typography>

          <Typography mt={3} variant="body2" fontWeight="normal" flexGrow={1} textAlign="center">
            If you don’t recieve anything, check your email’s spam, or{' '}
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
            to recieve a new letter.
          </Typography>
        </Box>
        <Box>
          <ConfirmationButton
            variant="contained"
            color="primary"
            sx={{ px: 2, py: 1, my: 2, mt: 10 }}
            type="submit"
          >
            Go back to Sign In
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
