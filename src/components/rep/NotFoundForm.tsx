import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { FormSection } from "src/components/common/FormSection";
import OnBoardingFormContainer from "src/components/common/OnBoardingFormContainer";
import {
  RepOnBoardingStep,
  useRepOnboarding,
} from "src/context/repOnBoardingContext";

const NotFoundForm = () => {
  const { goToStep } = useRepOnboarding();

  const goBackToMainPage = () => {
    //call api before going next screen
    goToStep(RepOnBoardingStep.UserData);
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="center">
      <FormSection alignItems="stretch" maxWidth={400} mb={8}>
        <Typography variant="h5" mb={6} fontWeight="bold" align="center">
          Sorry, we didn’t find you as an advisor
        </Typography>
        <Typography variant="body2" align="center">
          Please, check your data is correct. In other case you cannot create a
          profile on our platform
        </Typography>
      </FormSection>
      <FormSection alignItems="stretch" maxWidth={400}>
        <ConfirmationButton
          variant="contained"
          color="primary"
          onClick={goBackToMainPage}
          style={{ color: "#ffff" }}
        >
          Go Back on Main Page
        </ConfirmationButton>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default NotFoundForm;

const ConfirmationButton = styled(Button)({
  paddingLeft: 40,
  paddingRight: 40,
  height: 48,
  borderRadius: 8,
});
