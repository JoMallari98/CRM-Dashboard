import { ArrowBack } from '@mui/icons-material';
import { Box, Button, IconButton, styled, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import { useOnboarding } from "src/context/userOnBoardingContext";
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import UserInfoCard from './common/UserInfoCard';

const UserBackgroundForm = () => {
  // const { goPrevStep, goNextStep } = useOnboarding();
  const router = useRouter();

  const continueInvestorOnBoarding = () => {
    router.push('/investor/questions');
  };

  const goToRepOnBoarding = () => {
    // goNextStep();
    router.push('/signup/onboarding/confirm-crd');
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={6}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={() => router.back()}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>
      <FormSection alignItems="stretch" maxWidth={400} mb={7}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Your background
        </Typography>
        <Typography variant="body2" mb={10} align="center">
          It seems you maybe a registered person
        </Typography>
        <UserInfoCard name="John Roberts" userTitle="Investment Advisor" />
      </FormSection>
      <FormSection alignItems="stretch" maxWidth={400}>
        <ConfirmationButton
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={goToRepOnBoarding}
          style={{ color: '#ffff' }}
        >
          Yes, this is me
        </ConfirmationButton>
        <ConfirmationButton variant="outlined" color="primary" onClick={continueInvestorOnBoarding}>
          No this is not me
        </ConfirmationButton>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default UserBackgroundForm;

const ConfirmationButton = styled(Button)({
  width: 230,
  maxWidth: 230,
  height: 48,
  borderRadius: 8,
  textTransform: 'none',
});
