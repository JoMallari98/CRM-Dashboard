/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import createMockInvestorContext from "src/test-utils/createMockInvestorContext";
import { OnBoardingContext } from "src/context/userOnBoardingContext";
import VerificationSelect from "src/components/Investor/VerificationSelect";

describe("investor/VerificationSelect", () => {
  let context = createMockInvestorContext();
  beforeEach(() => {
    render(
      <OnBoardingContext.Provider value={{ ...context }}>
        <VerificationSelect />
      </OnBoardingContext.Provider>
    );
  });

  it("Should selection buttons rendered", () => {
    expect(
      screen.getByText("Choose one of the following methods.")
    ).toBeInTheDocument();
    expect(screen.getByText("Send me a code by e-mail")).toBeInTheDocument();
    expect(screen.getByText("Send me a code by SMS")).toBeInTheDocument();
  });

  it("It should go to 6-digit verification form after selecting a button", () => {
    userEvent.click(screen.getByText("Send me a code by SMS"));
    expect(context.goNextStep).toHaveBeenCalled();
  });
  it("It should go to 6-digit verification form after selecting a button", () => {
    userEvent.click(screen.getByText("Send me a code by e-mail"));
    expect(context.goNextStep).toHaveBeenCalled();
  });
});
