/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import SignUpForm from "src/components/signup/SignUpForm";

describe("SignUpForm", () => {
  it("Should render a link to Sign in screen", () => {
    render(<SignUpForm />);

    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toHaveAttribute("href", "/signin");
  });

  it("Should render a link to Sign Up button", () => {
    render(<SignUpForm />);

    expect(screen.getByTestId("sign-up-button")).toBeInTheDocument();
  });
  it("Should render Email and password text fields", () => {
    render(<SignUpForm />);

    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });
  it("Should render social login buttons", () => {
    render(<SignUpForm />);

    expect(screen.getByText("Continue with Facebook")).toBeInTheDocument();
    expect(screen.getByText("Continue with Google")).toBeInTheDocument();
    expect(screen.getByText("Continue with LinkedIn")).toBeInTheDocument();
  });
});
