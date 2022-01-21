import { InvestorQuestions, OnBoardingContextState } from 'src/context/userOnBoardingContext';

const createMockInvestorContext = () => {
  return {
    currentStep: 0,
    currentQuestion: 0,
    goNextStep: jest.fn(),
    goPrevStep: jest.fn(),
    goToStep: jest.fn(),
    goNextQuestion: jest.fn(),
    goPrevQuestion: jest.fn(),
    goToQuestion: jest.fn(),
  } as OnBoardingContextState;
};

export default createMockInvestorContext;
