import React, { useContext, useState } from "react";

type OnBoardingContextState = {
  currentStep: number;
  currentQuestion: number;
  goNextStep(): void;
  goPrevStep(): void;
  goToStep(step: number): void;
  goNextQuestion(): void;
  goPrevQuestion(): void;
};

const defaultState = {
  currentStep: 0,
  currentQuestion: 0,
  goNextStep: () => {},
  goPrevStep: () => {},
  goToStep: (step: number) => {},
  goNextQuestion: () => {},
  goPrevQuestion: () => {},
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

export enum InvestorQuestions {
  InvestmentExperience,
  InvestmentStyle,
  InvestmentGoal,
  PrivacyPolicy,
}

export const OnBoardingContextProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const goNextStep = () => setCurrentStep(currentStep + 1);
  const goPrevStep = () => setCurrentStep(currentStep - 1);
  const goToStep = (step: number) => setCurrentStep(step);

  const goNextQuestion = () => setCurrentQuestion(currentQuestion + 1);
  const goPrevQuestion = () => setCurrentQuestion(currentQuestion - 1);
  return (
    <OnBoardingContext.Provider
      value={{
        currentStep,
        currentQuestion,
        goNextStep,
        goPrevStep,
        goToStep,
        goNextQuestion,
        goPrevQuestion,
      }}
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
