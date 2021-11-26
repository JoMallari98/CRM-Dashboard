import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import CustomNumberInput from "../OnBoarding/common/CustomNumberInput";
import { FormSection } from "../OnBoarding/common/FormSection";
import OnBoardingFormContainer from "../OnBoarding/common/OnBoardingFormContainer";

const VerificationForm = () => {
  const { goPrevStep, goNextStep } = useOnboarding();

  const handleSubmit = () => {
    goNextStep();
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={13}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" maxWidth={400} mb={16.5}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verification
        </Typography>
        <Typography variant="body2">Enter your verification code</Typography>
        <Box mt={18.5} mb={7} display="flex" justifyContent="center">
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
        </Box>

        <Typography variant="body2">
          Did not recieve a code?
          <Typography component="a" variant="body2" fontWeight="bold">
            {` Resend code`}
          </Typography>
        </Typography>
      </FormSection>
      <FormSection>
        <ContinueButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Continue
        </ContinueButton>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default VerificationForm;

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  borderRadius: 8,
  textTransform: "capitalize",
});
