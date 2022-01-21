import React from 'react';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { FormSection } from 'src/components/common/FormSection';
import { ArrowBack } from '@mui/icons-material';
import { Link, Button, IconButton, styled, Typography, Box } from '@mui/material';
import SixDigitVerification from 'src/components/common/SixDigitVerification';
import { useRouter } from 'next/router';

const PhoneVerification = () => {
  const router = useRouter();

  const resendCode = () => {
    // setOpen(true);
  };

  const handleSubmit = () => {
    // goNextStep();
    router.replace('/signup/user-type');
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={4}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={() => router.replace('/signup/onboarding/email-verification')}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" mb={7}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verify Phone Number
        </Typography>
        <Typography variant="body2" align="center" width="85%">
          Please enter your verification code we sent to +1XXX-XXX-XXXX
        </Typography>
        <Box mt={7} mb={7} display="flex" justifyContent="center">
          <SixDigitVerification />
        </Box>

        <Typography variant="body2" component="span">
          Did not receive a code?{' '}
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
          &nbsp; or &nbsp;
          <Link
            component="a"
            variant="body2"
            fontWeight="bold"
            onClick={resendCode}
            underline="hover"
            color="#009EF8"
            href="#"
          >
            {`Change phone number`}
          </Link>
        </Typography>
      </FormSection>
      <FormSection>
        <ContinueButton variant="contained" color="primary" onClick={() => handleSubmit()}>
          Confirm
        </ContinueButton>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
});

export default PhoneVerification;
