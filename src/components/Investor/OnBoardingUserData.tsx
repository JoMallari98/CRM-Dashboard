import { Grid, useTheme, styled, useMediaQuery } from "@mui/material";
import React, { useState, useMemo } from "react";
import {
  OnboardingSteps,
  useOnboarding,
} from "src/context/userOnBoardingContext";
import FailedRegistration from "./FailedRegistration";
import IdentityConfirmationForm from "./IdentityConfirmationForm";
import LogoBrandingSection, {
  PageType,
} from "src/components/common/LogoBrandingSection";
import UserTypeForm from "../usertype/UserTypeForm";
import UserBackgroundForm from "./UserBackgroundForm";
import UserDataForm from "./UserDataForm";
import VerificationForm from "./VerificationForm";
import VerificationSelect from "./VerificationSelect";

const OnBoardingUserData = () => {
  const { currentStep } = useOnboarding();
  // const [CurrentStep, setCurrentStep] = useState(UserTypeForm);
  const [type, setType] = useState<PageType>(PageType.USER_DATA);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const getCurrentStep = useMemo(() => {
    const step = currentStep as OnboardingSteps;

    switch (step) {
      case OnboardingSteps.UserDataForm:
        setType(PageType.USER_DATA);
        return UserDataForm;
      case OnboardingSteps.VerificationSelect:
        setType(PageType.VERIFICATION_Select);
        return VerificationSelect;
      case OnboardingSteps.VerificationCode:
        setType(PageType.VERIFICATION_CODE);
        return VerificationForm;
      case OnboardingSteps.UserBackground:
        setType(PageType.BACKGROUND);
        return UserBackgroundForm;
      case OnboardingSteps.IdentityConfirmation:
        setType(PageType.CONFIRM_CRD);
        return IdentityConfirmationForm;
      case OnboardingSteps.FailedRegistration:
        setType(PageType.INVALID_DATA);
        return FailedRegistration;
      default:
        setType(PageType.USER_DATA);
        return UserTypeForm;
    }
  }, [currentStep]);
  return (
    <Wrapper>
      <Grid
        container
        alignItems="stretch"
        flexGrow={1}
        direction={mdDown ? "column" : "row"}
      >
        <Grid item md={6}>
          <LogoBrandingSection type={type} />
        </Grid>
        <Grid item md={6}>
          {getCurrentStep()}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default OnBoardingUserData;

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  background: "#F8FCFF",
});
