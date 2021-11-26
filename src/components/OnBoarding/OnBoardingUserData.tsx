import { Grid, useTheme, styled, useMediaQuery } from "@mui/material";
import React from "react";
import {
  OnboardingSteps,
  useOnboarding,
} from "src/context/userOnBoardingContext";
import LogoBrandingSection from "../common/LogoBrandingSection";
import SignUpForm from "../common/SignUpForm";
import TypeOfUserForm from "../common/TypeOfUserForm";
import UserBackgroundForm from "../common/UserBackgroundForm";
import UserDataForm from "../common/UserDataForm";
import VerificationForm from "../common/VerificationForm";
import VerificationSelect from "../common/VerificationSelect";

const OnBoardingUserData = () => {
  const { currentStep } = useOnboarding();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const getCurrentStep = () => {
    const step = currentStep as OnboardingSteps;
    console.log(step);
    switch (step) {
      case OnboardingSteps.UserTypeForm:
        return TypeOfUserForm;
      case OnboardingSteps.UserDataForm:
        return UserDataForm;
      case OnboardingSteps.VerificationSelect:
        return VerificationSelect;
      case OnboardingSteps.VerificationCode:
        return VerificationForm;
      case OnboardingSteps.UserBackground:
        return UserBackgroundForm;
      default:
        return SignUpForm;
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
