/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserDataForm from "src/components/investor/UserDataForm";
import createMockInvestorContext from "src/test-utils/createMockInvestorContext";
import { OnBoardingContext } from "src/context/userOnBoardingContext";

describe("investor/UserDataForm", () => {
  let context = createMockInvestorContext();
  beforeEach(() => {
    render(
      <OnBoardingContext.Provider value={{ ...context }}>
        <UserDataForm />
      </OnBoardingContext.Provider>
    );
  });

  it("Should have fields rendered", () => {
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
  });

  it("It should go to verification step after submitting", () => {
    waitFor(() => {
      userEvent.click(screen.getByText("Continue"));
      expect(context.goNextStep).toHaveBeenCalled();
    });
  });
});
