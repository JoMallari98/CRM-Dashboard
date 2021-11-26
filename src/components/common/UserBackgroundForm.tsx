import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import { FormSection } from "../OnBoarding/common/FormSection";
import OnBoardingFormContainer from "../OnBoarding/common/OnBoardingFormContainer";
import UserInfoCard from "./UserInfoCard";

const UserBackgroundForm = () => {
  const { goPrevStep, goNextStep, goToStep } = useOnboarding();
  const [rejected, setRejected] = useState(false);
  const handleConfirm = () => {
    goNextStep();
  };

  const handleReject = () => {
    setRejected(true);
  };

  const continueRegistration = () => {
    goNextStep();
  };

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

      {!rejected && (
        <React.Fragment>
          <FormSection alignItems="stretch" maxWidth={400} mb={20}>
            <Typography variant="h5" mb={6} fontWeight="bold">
              Your background
            </Typography>
            <Typography variant="body2" mb={10}>
              It seems you maybe a registered person
            </Typography>
            <UserInfoCard />
          </FormSection>
          <FormSection alignItems="stretch" maxWidth={400}>
            <ConfirmationButton
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              onClick={handleConfirm}
            >
              Yes, this is me
            </ConfirmationButton>
            <ConfirmationButton variant="outlined" onClick={handleReject}>
              No this is not me
            </ConfirmationButton>
          </FormSection>
        </React.Fragment>
      )}
      {rejected && (
        <React.Fragment>
          <FormSection alignItems="stretch" maxWidth={400} mb={8}>
            <Typography variant="h5" mb={6} fontWeight="bold">
              Oh, we are so sorry!
            </Typography>
            <Typography variant="body2">
              Something went wrong, we appologize and will check our
              information. You can continue registration, while we are fixing it
            </Typography>
          </FormSection>
          <FormSection alignItems="stretch" maxWidth={400}>
            <ConfirmationButton
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              onClick={continueRegistration}
            >
              Continue the registration
            </ConfirmationButton>
            <ConfirmationButton variant="outlined" onClick={goBackToMainPage}>
              Go Back on Main Page
            </ConfirmationButton>
          </FormSection>
        </React.Fragment>
      )}
    </OnBoardingFormContainer>
  );
};

export default UserBackgroundForm;

const ConfirmationButton = styled(Button)({
  width: 230,
  maxWidth: 230,
  height: 48,
  borderRadius: 8,
  textTransform: "none",
});
