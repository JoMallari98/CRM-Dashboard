import React from "react";
import { Grid, useTheme, styled, useMediaQuery } from "@mui/material";
import LogoBrandingSection from "../common/LogoBrandingSection";
import {
  RepOnBoardingStep,
  useRepOnboarding,
} from "src/context/repOnBoardingContext";
import UserDataFrom from "./UserDataForm";
import RepTypeForm from "./RepTypeForm";
import NotFoundForm from "./NotFoundForm";

const RepOnBoarding = () => {
  const theme = useTheme();
  const { currentStep } = useRepOnboarding();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const getCurrentStep = () => {
    switch (currentStep) {
      case RepOnBoardingStep.UserData:
        return UserDataFrom;
      case RepOnBoardingStep.ChooseRepType:
        return RepTypeForm;
      case RepOnBoardingStep.NotFoundInDatabase:
        return NotFoundForm;
      default:
        return UserDataFrom;
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

export default RepOnBoarding;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
