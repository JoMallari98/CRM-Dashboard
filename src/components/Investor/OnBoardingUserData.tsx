import { Grid, useTheme, styled, useMediaQuery } from "@mui/material";
import React from "react";
import {
  OnboardingSteps,
  useOnboarding,
} from "src/context/userOnBoardingContext";
import FailedRegistration from "./FailedRegistration";
import IdentityConfirmationForm from "./IdentityConfirmationForm";
import LogoBrandingSection from "src/components/common/LogoBrandingSection";
import UserTypeForm from "../usertype/UserTypeForm";
import UserBackgroundForm from "./UserBackgroundForm";
import UserDataForm from "./UserDataForm";
import VerificationForm from "./VerificationForm";
import VerificationSelect from "./VerificationSelect";

const OnBoardingUserData = () => {
  const { currentStep } = useOnboarding();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const getCurrentStep = () => {
    const step = currentStep as OnboardingSteps;
    switch (step) {
      case OnboardingSteps.UserDataForm:
        return UserDataForm;
      case OnboardingSteps.VerificationSelect:
        return VerificationSelect;
      case OnboardingSteps.VerificationCode:
        return VerificationForm;
      case OnboardingSteps.UserBackground:
        return UserBackgroundForm;
      case OnboardingSteps.IdentityConfirmation:
        return IdentityConfirmationForm;
      case OnboardingSteps.FailedRegistration:
        return FailedRegistration;
      default:
        return UserTypeForm;
    }
  };
  const CurrentStep = getCurrentStep();
  return (
    <Wrapper>
      <Grid
        container
        alignItems="stretch"
        flexGrow={1}
        direction={mdDown ? "column" : "row"}
      >
        <Grid item md={6}>
          <LogoBrandingSection />
        </Grid>
        <Grid item md={6}>
          <CurrentStep />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default OnBoardingUserData;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
