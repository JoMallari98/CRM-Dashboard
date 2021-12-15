/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import createMockInvestorContext from "src/test-utils/createMockInvestorContext";
import { OnBoardingContext } from "src/context/userOnBoardingContext";
import IdentityConfirmationForm from "src/components/Investor/IdentityConfirmationForm";

import { RouterContext } from "next/dist/shared/lib/router-context";
import createMockRouter from "src/test-utils/createMockRouter";

describe("investor/VerificationForm", () => {
  let context = createMockInvestorContext();
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <OnBoardingContext.Provider value={{ ...context }}>
          <IdentityConfirmationForm />
        </OnBoardingContext.Provider>
      </RouterContext.Provider>
    );
  });

  it("Should allow the user to confirm his identity", () => {
    expect(screen.getByText("Confirm your identity")).toBeInTheDocument();
    expect(screen.getByLabelText("CRD Number")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("It should navigate to questions after confirmation", async () => {
    await waitFor(() => {
      const input = screen.getByLabelText("CRD Number");
      userEvent.type(input, "1234567890");
      userEvent.click(screen.getByText("Confirm"));
      expect(router.push).toHaveBeenCalledWith("/rep");
    });
  });
});
