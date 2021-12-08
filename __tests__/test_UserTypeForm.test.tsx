/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import UserTypeForm from "src/components/usertype/UserTypeForm";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import createMockRouter from "src/test-utils/createMockRouter";

describe("UserTypeForm", () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <UserTypeForm />
      </RouterContext.Provider>
    );
  });

  it("Should allow the user to choose which type he/she is", () => {
    expect(screen.getByText("I am an investor")).toBeInTheDocument();
    expect(screen.getByText("I’m an investment advisor")).toBeInTheDocument();
    expect(screen.getByText("I work with an advisor")).toBeInTheDocument();
    expect(screen.getByText("I’m a registered broker")).toBeInTheDocument();
    expect(
      screen.getByText(
        "I work for a financial institution, but I am neither an advisor nor a broker"
      )
    ).toBeInTheDocument();
  });

  it("It should redirect investors to investor onboarding", () => {
    userEvent.click(screen.getByText("I am an investor"));
    expect(router.push).toHaveBeenCalledWith("/investor/user-data");
  });

  it("It should redirect rep to rep onboarding", () => {
    userEvent.click(screen.getByText("I’m an investment advisor"));
    expect(router.push).toHaveBeenCalledWith("/rep");
  });
  it("It should redirect rep to rep onboarding", () => {
    userEvent.click(screen.getByText("I work with an advisor"));
    expect(router.push).toHaveBeenCalledWith("/rep");
  });
});
