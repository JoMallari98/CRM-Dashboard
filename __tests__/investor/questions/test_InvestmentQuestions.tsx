/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";
import InvestmentQuestions from "src/components/investor/questions/InvestmentQuestions";
import createMockRouter from "src/test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@mui/material";
import theme from "src/styles/theme";

describe("investor/VerificationSelect", () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <ThemeProvider theme={theme}>
          <OnBoardingContextProvider>
            <InvestmentQuestions />
          </OnBoardingContextProvider>
        </ThemeProvider>
      </RouterContext.Provider>
    );
  });

  it("Should render elements correctly for Question 1", () => {
    expect(
      screen.getByText("How would you rate your investment experience?")
    ).toBeInTheDocument();
    expect(screen.getByText("None")).toBeInTheDocument();
    expect(screen.getByText("Limited")).toBeInTheDocument();
    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.getByText("Extensive")).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 3")).toBeInTheDocument();
  });

  it("Should go to sign up when Clicking back to sign up", () => {
    userEvent.click(screen.getByText("Back to Sign Up"));
    expect(router.replace).toHaveBeenCalledWith("/signup");
  });

  it("Should go to next question when clicking next question", () => {
    userEvent.click(screen.getByText("Next question"));
    expect(
      screen.getByText("How would you describe your investment style?")
    ).toBeInTheDocument();
  });

  it("Should render elements correctly for Question 2", () => {
    userEvent.click(screen.getByText("Next question"));

    expect(
      screen.getByText("How would you describe your investment style?")
    ).toBeInTheDocument();
    expect(screen.getByText("Conservative")).toBeInTheDocument();
    expect(screen.getByText("Moderately conservative")).toBeInTheDocument();
    expect(screen.getByText("Moderate")).toBeInTheDocument();
    expect(screen.getByText("Moderately aggressive")).toBeInTheDocument();
    expect(screen.getByText("Aggressive")).toBeInTheDocument();
    expect(screen.getByText("Question 2 of 3")).toBeInTheDocument();
  });
  it("Should go to Question 3 after clicking next", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));

    await expect(screen.getByText("Question 3 of 3")).toBeInTheDocument();
  });

  it("Should render elements correctly for Question 3", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));

    await expect(screen.getByText("Question 3 of 3")).toBeInTheDocument();
    expect(screen.getByText("Create a profile")).toBeInTheDocument();
    expect(screen.getByText("Generate income")).toBeInTheDocument();
    expect(screen.getByText("Grow my money")).toBeInTheDocument();
    expect(screen.getByText("Protect my capital")).toBeInTheDocument();
    expect(
      screen.getByText("Minimize sudden ups and downs")
    ).toBeInTheDocument();
  });

  it("Should go to electronic delivery after question 3", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Create a profile"));

    expect(
      screen.getByText("Electronic Delivery Agreement")
    ).toBeInTheDocument();
  });

  it("Should go to decline screen when electronic delivery is declined", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Create a profile"));

    userEvent.click(screen.getByText("I Decline"));
    expect(
      screen.getByText("You have declined electronic delivery")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Consent to electronic delivery")
    ).toBeInTheDocument();
    expect(screen.getByText("Decline")).toBeInTheDocument();
  });
});
