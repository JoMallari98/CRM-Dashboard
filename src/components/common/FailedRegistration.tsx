import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import { FormSection } from "../OnBoarding/common/FormSection";
import OnBoardingFormContainer from "../OnBoarding/common/OnBoardingFormContainer";
import UserInfoCard from "./UserInfoCard";

const FailedRegistration = () => {
  const { goPrevStep, goToStep } = useOnboarding();
  const router = useRouter();

  const goBackToMainPage = () => {
    goToStep(0);
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

      <React.Fragment>
        <FormSection alignItems="stretch" maxWidth={400} mb={8}>
          <Typography variant="h5" mb={6} fontWeight="bold">
            Oh, we are so sorry!
          </Typography>
          <Typography variant="body2" align="center">
            Something went wrong, we apologize and will check our information.
            Unfortunatelly, you cannot continue the registration, please connect
            our support service +1783939440.
          </Typography>
        </FormSection>
        <FormSection alignItems="stretch" maxWidth={400}>
          <ConfirmationButton variant="outlined" onClick={goBackToMainPage}>
            Go Back on Main Page
          </ConfirmationButton>
        </FormSection>
      </React.Fragment>
    </OnBoardingFormContainer>
  );
};

export default FailedRegistration;

const ConfirmationButton = styled(Button)({
  width: 230,
  maxWidth: 230,
  height: 48,
  borderRadius: 8,
  textTransform: "none",
});
