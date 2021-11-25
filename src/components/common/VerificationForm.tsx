import { ArrowBack } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import CustomNumberInput from "../OnBoarding/common/CustomNumberInput";
import { FormSection } from "../OnBoarding/common/FormSection";
import OnBoardingFormContainer from "../OnBoarding/common/OnBoardingFormContainer";

const VerificationForm = () => {
  const { goPrevStep, goNextStep } = useOnboarding();
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={13}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" maxWidth={400}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verification
        </Typography>
        <Typography variant="body2">Enter your verification code</Typography>
        <Box mt={18.5} display="flex" justifyContent="center">
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
        </Box>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default VerificationForm;
