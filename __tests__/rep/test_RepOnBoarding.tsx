/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import createMockRouter from "src/test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@mui/material";
import theme from "src/styles/theme";
import RepOnBoarding from "src/components/rep/RepOnBoarding";
import { RepOnBoardingProvider } from "src/context/repOnBoardingContext";

describe("investor/VerificationSelect", () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <ThemeProvider theme={theme}>
          <RepOnBoardingProvider>
            <RepOnBoarding />
          </RepOnBoardingProvider>
        </ThemeProvider>
      </RouterContext.Provider>
    );
  });

  it("Should render elements correctly", () => {
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("RIA Name")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Cell/Office phone")).toBeInTheDocument();
    expect(screen.getByLabelText("CRD Number")).toBeInTheDocument();
    expect(screen.getByText("Previous Step")).toBeInTheDocument();
    expect(screen.getByText("Next Step")).toBeInTheDocument();
  });

  it("Should render elements correctly", () => {
    userEvent.click(screen.getByText("Previous Step"));
    expect(router.back).toHaveBeenCalled();
  });

  it("From page 1, it should render Next page when clicked Next Step", () => {
    waitFor(() => {
      userEvent.click(screen.getByText("Next Step"));

      expect(screen.getByText(`As an Advisor`)).toBeInTheDocument();
      expect(
        screen.getByText(`As an Advisor acting as an Investor`)
      ).toBeInTheDocument();
    });
  });

  it("From page 2, it should render Next page when clicked Next Step", async () => {
    waitFor(() => {
      userEvent.click(screen.getByText("Next Step"));
      userEvent.click(screen.getByText("Next Step"));
      expect(
        screen.getByText(`Sorry, we didn’t find you as an advisor`)
      ).toBeInTheDocument();

      expect(screen.getByText("Go Back on Main Page")).toBeInTheDocument();
      userEvent.click(screen.getByText("Go Back on Main Page"));
      expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    });
  });
});
