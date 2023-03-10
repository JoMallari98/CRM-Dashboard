import { ArrowBack } from '@mui/icons-material';
import { Box, Button, IconButton, styled, Typography, FormControl } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { OnboardingSteps, useOnboarding } from 'src/context/userOnBoardingContext';
import CustomTextField from 'src/components/common/CustomTextField';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { Formik, Form } from 'formik';
import { Asserts, object, string } from 'yup';

const validationSchema = object({
  crdNumber: string().required('Please input CRD Number'),
});

const IdentityConfirmationForm = () => {
  // const { goPrevStep, goToStep } = useOnboarding();
  const router = useRouter();

  const handleSubmit = (values: Asserts<typeof validationSchema>) => {
    const success = true; // simulate call to API.
    if (success) {
      router.push('/rep');
    } else {
      // goToStep(OnboardingSteps.FailedRegistration);
      router.push('/signup/onboarding/invalid-data');
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        crdNumber: '',
      }}
      onSubmit={handleSubmit}
    >
      <OnBoardingFormContainer component={Form} pt={0} justifyContent="flex-start">
        <FormSection mt={6} mb={6}>
          <Box display="flex" alignItems="center" width="100%" mb={3}>
            <IconButton data-testid="back-btn" onClick={() => router.back()}>
              <ArrowBack fontSize="small" />
            </IconButton>
          </Box>
        </FormSection>

        <FormSection alignItems="stretch" maxWidth={400} mb={7}>
          <Typography variant="h5" mb={6} fontWeight="bold">
            Confirm your identity
          </Typography>
          <Typography variant="body2" align="center">
            Please, write your CRD Number to confirm your identity
          </Typography>
          <Box mt={6} width="90%">
            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField label="CRD Number" id="crd-number" name="crdNumber" />
            </FormControl>
          </Box>
        </FormSection>
        <FormSection alignItems="stretch" maxWidth={400}>
          <ConfirmationButton variant="contained" color="primary" sx={{ mb: 2 }} type="submit">
            Confirm
          </ConfirmationButton>
        </FormSection>
      </OnBoardingFormContainer>
    </Formik>
  );
};

export default IdentityConfirmationForm;

const ConfirmationButton = styled(Button)({
  width: 230,
  maxWidth: 230,
  height: 48,
  borderRadius: 8,
  textTransform: 'none',
  color: '#ffff',
});
