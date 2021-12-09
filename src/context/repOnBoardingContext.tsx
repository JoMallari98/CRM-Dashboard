import React, { useContext, useState } from "react";

export enum RepOnBoardingStep {
  NotFoundInDatabase,
  UserData,
  ChooseRepType,
}

type RepOnBoardingContextState = {
  currentStep: RepOnBoardingStep;
  goNextStep(): void;
  goPrevStep(): void;
  goToStep(step: RepOnBoardingStep): void;
};

const defaultState = {
  currentStep: RepOnBoardingStep.UserData,
  goNextStep: () => {},
  goPrevStep: () => {},
  goToStep: (step: RepOnBoardingStep) => {},
};

const RepOnBoardingContext =
  React.createContext<RepOnBoardingContextState>(defaultState);

export const RepOnBoardingProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(RepOnBoardingStep.UserData);
  const goNextStep = () => setCurrentStep((currentStep + 1) % 3);
  const goPrevStep = () => setCurrentStep(currentStep - 1);
  const goToStep = (step: number) => setCurrentStep(step);

  return (
    <RepOnBoardingContext.Provider
      value={{
        currentStep,
        goNextStep,
        goPrevStep,
        goToStep,
      }}
    >
      {children}
    </RepOnBoardingContext.Provider>
  );
};

export const useRepOnboarding = () => {
  const context = useContext(RepOnBoardingContext);
  if (!context) {
    throw new Error("Must use OnBoardingContextProvider on parent container ");
  }

  return context;
};
