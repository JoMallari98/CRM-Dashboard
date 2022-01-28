import { ArrowBack, Close } from '@mui/icons-material';
import { Button, IconButton, Link, Snackbar, Typography, Box, styled } from '@mui/material';
import React, { useState } from 'react';
import { useOnboarding } from 'src/context/userOnBoardingContext';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import SixDigitVerification from 'src/components/common/SixDigitVerification';

const VerificationForm = () => {
  const { goPrevStep, goNextStep } = useOnboarding();
  // const [open, setOpen] = useState<boolean>(false);
  const handleSubmit = () => {
    goNextStep();
  };

  const resendCode = () => {
    // setOpen(true);
  };
  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    // setOpen(false);
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start" justifySelf="stretch" width="100%">
      <FormSection mt={6} mb={6}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton /*onClick={goPrevStep}*/>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" mb={7}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verification
        </Typography>
        <Typography variant="body2" align="center" width="100%">
          Enter your verification code
        </Typography>
        <Box mt={7} mb={7} display="flex" justifyContent="center">
          <SixDigitVerification />
        </Box>

        <Typography variant="body2" component="span">
          Didn't receive a code?{' '}
          <Link
            component="a"
            variant="body2"
            fontWeight="bold"
            onClick={resendCode}
            underline="hover"
            color="#009EF8"
            href="#"
          >
            {`Resend code`}
          </Link>
        </Typography>
      </FormSection>
      <FormSection>
        <ContinueButton variant="contained" color="primary" onClick={() => handleSubmit()}>
          Confirm
        </ContinueButton>
      </FormSection>
      {/* <Snackbar
        // open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Another code has been sent"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      /> */}
    </OnBoardingFormContainer>
  );
};

export default VerificationForm;

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
});
