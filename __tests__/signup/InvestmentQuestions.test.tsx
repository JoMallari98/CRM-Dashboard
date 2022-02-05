/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { OnBoardingContextProvider } from "src/context/userOnBoardingContext";
import InvestmentQuestions from "pages/signup/questions";
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
  // Test for Question 1 texts 
  it("Should render elements correctly for Question 1", () => {
    expect(screen.getByText("Almost done!")).toBeInTheDocument();
    expect(screen.getByText("We’d like to know more about you, please answer a few short questions to complete your profile")).toBeInTheDocument();
    expect(screen.getByText("How would you rate your investment experience?")).toBeInTheDocument();
    expect(screen.getByText("None")).toBeInTheDocument();
    expect(screen.getByText("Limited")).toBeInTheDocument();
    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.getByText("Extensive")).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 3")).toBeInTheDocument();
  });
  // Test for Back Click Event
  it("Should go to sign up when Clicking back to sign up", () => {
    userEvent.click(screen.getByText("Back to Sign Up"));
    expect(router.push).toHaveBeenCalledWith("/signup");
  });
  //Test for Next Click Event
  it("Should go to next question when clicking next question", () => {
    userEvent.click(screen.getByText("Next question"));
    expect(screen.getByText("How would you describe your investment style?")).toBeInTheDocument();
  });
  //Test for question 2 Texts 
  it("Should render elements correctly for Question 2", () => {
    userEvent.click(screen.getByText("Next question"));
    expect(screen.getByText("How would you describe your investment style?")).toBeInTheDocument();
    expect(screen.getByText("Conservative")).toBeInTheDocument();
    expect(screen.getByText("Moderately conservative")).toBeInTheDocument();
    expect(screen.getByText("Moderate")).toBeInTheDocument();
    expect(screen.getByText("Moderately aggressive")).toBeInTheDocument();
    expect(screen.getByText("Aggressive")).toBeInTheDocument();
    expect(screen.getByText("Question 2 of 3")).toBeInTheDocument();
  });
  //Test for Question 2 next click event
  it("Should go to Question 3 after clicking next", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));

    await expect(screen.getByText("Question 3 of 3")).toBeInTheDocument();
  });
  // Test for Question 3 next click event 
  it("Should render elements correctly for Question 3", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));

    await expect(screen.getByText("Question 3 of 3")).toBeInTheDocument();
    expect(screen.getByText("Let's Start")).toBeInTheDocument();
    expect(screen.getByText("Generating income")).toBeInTheDocument();
    expect(screen.getByText("Growing my money")).toBeInTheDocument();
    expect(screen.getByText("Protecting my capital")).toBeInTheDocument();
    expect(
      screen.getByText("Minimizing ups and downs")
    ).toBeInTheDocument();
  });
  // Test for electronic delivery next click event
  it("Should go to electronic delivery after question 3", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Let's Start"));

    expect(
      screen.getByText("Electronic Delivery Agreement")
    ).toBeInTheDocument();
  });
  // Test for declined page next click event
  it("Should go to decline screen when electronic delivery is declined", async () => {
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Next question"));
    userEvent.click(screen.getByText("Let's Start"));

    userEvent.click(screen.getByText("I Decline"));
    expect(
      screen.getByText("You have declined electronic delivery")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Consent to electronic delivery")
    ).toBeInTheDocument();
    expect(screen.getByText("Decline")).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup()
  })
});
