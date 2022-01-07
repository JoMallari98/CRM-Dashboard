/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import createMockInvestorContext from "src/test-utils/createMockInvestorContext";
import { OnBoardingContext } from "src/context/userOnBoardingContext";
import VerificationForm from "src/components/investor/VerificationForm";

describe("investor/VerificationForm", () => {
  let context = createMockInvestorContext();
  beforeEach(() => {
    render(
      <OnBoardingContext.Provider value={{ ...context }}>
        <VerificationForm />
      </OnBoardingContext.Provider>
    );
  });

  it("Should render items correctly", () => {
    expect(
      screen.getByText("Enter your verification code")
    ).toBeInTheDocument();
    expect(screen.getByText("Resend code")).toBeInTheDocument();
  });

  it("It should go to user background screen after clicking confirm", () => {
    userEvent.click(screen.getByText("Confirm"));
    expect(context.goNextStep).toHaveBeenCalled();
  });
});
