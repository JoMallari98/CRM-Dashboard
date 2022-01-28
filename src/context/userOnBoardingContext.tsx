import React, { useContext, useState } from 'react';

export type OnBoardingContextState = {
  currentStep: number;
  currentQuestion: number;
  goNextStep(): void;
  goPrevStep(): void;
  goToStep(step: OnboardingSteps): void;
  goNextQuestion(): void;
  goPrevQuestion(): void;
  goToQuestion(number: InvestorQuestions): void;
};

const defaultState = {
  currentStep: 0,
  currentQuestion: 0,
  goNextStep: () => {},
  goPrevStep: () => {},
  goToStep: (step: number) => {},
  goNextQuestion: () => {},
  goPrevQuestion: () => {},
  goToQuestion: (number: InvestorQuestions) => {},
};

export const OnBoardingContext = React.createContext<OnBoardingContextState>(defaultState);

export enum OnboardingSteps {
  UserDataForm,
  VerificationSelect,
  VerificationCode,
  UserBackground,
  IdentityConfirmation,
  FailedRegistration,
}

export enum InvestorQuestions {
  InvestmentExperience,
  InvestmentStyle,
  InvestmentGoal,
  ElectronicDeliveryConfirmation,
  DeclinedElectronicDelivery,
  WelcomePage,
}

export const OnBoardingContextProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const goNextStep = () => setCurrentStep((current) => current + 1);
  const goPrevStep = () => setCurrentStep((current) => current - 1);
  const goToStep = (step: number) => setCurrentStep(step);

  const goNextQuestion = () => setCurrentQuestion((current) => current + 1);
  const goPrevQuestion = () => setCurrentQuestion((current) => current - 1);
  const goToQuestion = (question: InvestorQuestions) => setCurrentQuestion(question);
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
        goToQuestion,
      }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
};
export const useOnboarding = () => {
  const context = useContext(OnBoardingContext);
  if (!context) {
    throw new Error('Must use OnBoardingContextProvider on parent container ');
  }

  return context;
};
