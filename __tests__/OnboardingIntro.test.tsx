/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import OnBoardingIntro from "src/components/common/OnBoardingIntro";

describe("Onboarding Intro", () => {
  // Test for Welcome User
  it("should render a section to welcome the user", () => {
    render(<OnBoardingIntro />);

    expect(screen.getByText("Hello, User.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Let's Start")).toBeInTheDocument();
  });
  // Test For route to sign in
  it("should have to /signin after clicking Let's Start", () => {
    render(<OnBoardingIntro />);

    expect(screen.getByText("Let's Start")).toHaveProperty(
      "href",
      "http://localhost/signin"
    );
  });
});
