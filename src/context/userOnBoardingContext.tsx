import React, { useContext, useState } from "react";

type OnBoardingContextState = {
  currentStep: number;
  goNextStep(): void;
  goPrevStep(): void;
  goToStep(step: number): void;
};

const defaultState = {
  currentStep: 1,
  goNextStep: () => {},
  goPrevStep: () => {},
  goToStep: (step: number) => {},
};

const OnBoardingContext =
  React.createContext<OnBoardingContextState>(defaultState);

export enum OnboardingSteps {
  UserTypeForm,
  UserDataForm,
  VerificationSelect,
  VerificationCode,
  UserBackground,
  IncorrectBackground,
}

export const OnBoardingContextProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNextStep = () => setCurrentStep(currentStep + 1);
  const goPrevStep = () => setCurrentStep(currentStep - 1);
  const goToStep = (step: number) => setCurrentStep(step);
  return (
    <OnBoardingContext.Provider
      value={{ currentStep, goNextStep, goPrevStep, goToStep }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
};
export const useOnboarding = () => {
  const context = useContext(OnBoardingContext);
  if (!context) {
    throw new Error("Must use OnBoardingContextProvider on parent container ");
  }

  return context;
};
