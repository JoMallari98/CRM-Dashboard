import React, { useState } from 'react';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { FormSection } from 'src/components/common/FormSection';
import { ArrowBack } from '@mui/icons-material';
import { Link, Button, IconButton, styled, Typography, Box } from '@mui/material';
import SixDigitVerification from 'src/components/common/SixDigitVerification';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Image from 'next/image';


const EmailVerification = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false)
  const resendEmail = () => {
    // setOpen(true);
  };

  const handleSubmit = () => {
    // goNextStep();
    setLoader(true)
    toast.success("Email verifed Successfly");
    router.push('/signup/onboarding/phone-verification');
    
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={0}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={() => router.back()}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" mb={7}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verify Email
        </Typography>
        <Typography variant="body2" align="center" width="85%">
          We sent an email with verification code to example@email.com To continue please check your
          email and write your code
        </Typography>
        <Box mt={15} mb={3} display="flex" justifyContent="center">
          <SixDigitVerification />
        </Box>

        <Typography variant="body2" component="span">
          Did not receive a email?{' '}
          <Link
            component="a"
            variant="body2"
            fontWeight="bold"
            onClick={resendEmail}
            underline="hover"
            color="#009EF8"
            href="#"
          >
            {`Resend email`}
          </Link>
        </Typography>
      </FormSection>
      <FormSection>
        <ContinueButton variant="contained" color="primary" onClick={() => handleSubmit()}>
          Confirm
          {loader && <Image src="/loader.gif" width="20px" height="20px" alt="loader" />}
        </ContinueButton>
      </FormSection>

      {/* <FormSection alignItems="stretch" maxWidth={400}>
										<Typography variant="h5" mb={6} fontWeight="bold">
											Verification
										</Typography>
										<Typography variant="body2" align="center">
											For your protection we need to confirm your identity
										</Typography>
										<Typography variant="body2" align="center">
											Choose one of the following methods.
										</Typography>
										<Box mt={19}>
											<SendButton variant="text" onClick={handleEmail}>
												Send me a code by e-mail
											</SendButton>
											<Typography variant="body2" my={1} align="center">
												or
											</Typography>
											<SendButton variant="text" onClick={handleSms}>
												Send me a code by SMS
											</SendButton>
										</Box>
									</FormSection> */}
    </OnBoardingFormContainer>
  );
};

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  marginTop: 40,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
});

export default EmailVerification;
