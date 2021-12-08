/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import createMockInvestorContext from "src/test-utils/createMockInvestorContext";
import {
  OnBoardingContext,
  OnboardingSteps,
} from "src/context/userOnBoardingContext";
import UserBackgroundForm from "src/components/Investor/UserBackgroundForm";

describe("investor/VerificationForm", () => {
  let context = createMockInvestorContext();
  beforeEach(() => {
    render(
      <OnBoardingContext.Provider value={{ ...context }}>
        <UserBackgroundForm />
      </OnBoardingContext.Provider>
    );
  });

  it("Should allow the user to confirm his identity/background", () => {
    expect(screen.getByText("Your background")).toBeInTheDocument();
    expect(screen.getByText("Yes, this is me")).toBeInTheDocument();
    expect(screen.getByText("No this is not me")).toBeInTheDocument();
  });

  it("It should go to user identity confirmation after confirmation", () => {
    userEvent.click(screen.getByText("Yes, this is me"));
    expect(context.goToStep).toHaveBeenCalledWith(
      OnboardingSteps.IdentityConfirmation
    );
  });

  it("It should render sorry, something went wrong, etc when user rejects", () => {
    userEvent.click(screen.getByText("No this is not me"));
    expect(screen.getByText("Oh, sorry!")).toBeInTheDocument();
    expect(screen.getByText("Continue the registration")).toBeInTheDocument();
    expect(screen.getByText("Go Back on Main Page")).toBeInTheDocument();
    userEvent.click(screen.getByText("Go Back on Main Page"));
    expect(context.goToStep).toHaveBeenCalledWith(OnboardingSteps.UserDataForm);
  });
});
