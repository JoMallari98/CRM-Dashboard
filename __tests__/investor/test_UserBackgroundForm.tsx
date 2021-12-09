/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import createMockInvestorContext from "src/test-utils/createMockInvestorContext";
import { OnBoardingContext } from "src/context/userOnBoardingContext";
import UserBackgroundForm from "src/components/Investor/UserBackgroundForm";

import { RouterContext } from "next/dist/shared/lib/router-context";
import createMockRouter from "src/test-utils/createMockRouter";

describe("investor/VerificationForm", () => {
  let context = createMockInvestorContext();
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <OnBoardingContext.Provider value={{ ...context }}>
          <UserBackgroundForm />
        </OnBoardingContext.Provider>
      </RouterContext.Provider>
    );
  });

  it("Should allow the user to confirm his identity/background", () => {
    expect(screen.getByText("Your background")).toBeInTheDocument();
    expect(screen.getByText("Yes, this is me")).toBeInTheDocument();
    expect(screen.getByText("No this is not me")).toBeInTheDocument();
  });

  it("It should go to user identity confirmation after confirmation", () => {
    userEvent.click(screen.getByText("Yes, this is me"));
    expect(context.goNextStep).toHaveBeenCalled();
  });

  it("It should render sorry, something went wrong, etc when user rejects", () => {
    userEvent.click(screen.getByText("No this is not me"));

    expect(router.push).toHaveBeenCalledWith("/investor/questions");
  });
});
