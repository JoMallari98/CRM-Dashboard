/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import OnBoardingIntro from "../OnBoardingIntro";

describe("Onboarding Intro", () => {
  it("should render a section to welcome the user", () => {
    render(<OnBoardingIntro />);

    expect(screen.getByText("Hello, User.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("OnBoard")).toBeInTheDocument();
  });
  it("should have to /signin after clicking OnBoard", () => {
    render(<OnBoardingIntro />);

    expect(screen.getByText("OnBoard")).toHaveProperty(
      "href",
      "http://localhost/signin"
    );
  });
});
