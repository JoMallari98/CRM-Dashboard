/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import SignInForm from "src/components/signin/SignInForm";

describe("SignInForm", () => {
  it("Should render a link to Sign up screen", () => {
    render(<SignInForm />);

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toHaveAttribute("href", "/signup");
  });
  it("Should render a link to Forgot password", () => {
    render(<SignInForm />);

    expect(screen.getByText("Forgot Password?")).toBeInTheDocument();
    expect(screen.getByText("Forgot Password?")).toHaveAttribute(
      "href",
      "/reset-password"
    );
  });
  it("Should render a  Sign In button", () => {
    render(<SignInForm />);

    expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();
  });
  it("Should render Email and password text fields", () => {
    render(<SignInForm />);

    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });
  it("Should render social login buttons", () => {
    render(<SignInForm />);

    expect(screen.getByText("Continue with Facebook")).toBeInTheDocument();
    expect(screen.getByText("Continue with Google")).toBeInTheDocument();
    expect(screen.getByText("Continue with LinkedIn")).toBeInTheDocument();
  });
});
