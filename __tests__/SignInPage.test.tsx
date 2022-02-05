/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, cleanup,fireEvent} from "@testing-library/react";
import SignInPage from "pages/signin";

describe("SignInPage", () => {

  beforeEach(() => {
      render(<SignInPage />);
  })
  //Test for Left sided Background Image 
  it("Should have a left background image", () => {
    expect(screen.getByTestId("background")).toHaveStyle("background: url('/assets/images/sign_in_img.png') no-repeat");
  });
  // Test for Texts
  it("Should render text and link to Sign up screen", () => {
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toHaveAttribute("href", "/signup");
  });
  // Test for forgot password text and hyperlink
  it("Should render a link to Forgot password", () => {
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toHaveAttribute(
      "href",
      "/reset-password"
    );
  });
  // Test for Password Visible Icon
  it("Password Visibility click to show password", () => {
    fireEvent.click(screen.getByTestId('visibility-off'));
    expect(screen.getByLabelText('Enter your password')).toHaveAttribute("type", "text")
  });
  //Test for labels
  it("Should render Email and password Label", () => {
    expect(screen.getByLabelText("Enter your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter your password")).toBeInTheDocument();
  });
  //Test for Social Buttons
  it("Should render social login buttons", () => {
    expect(screen.getByText("or")).toBeInTheDocument();
    expect(screen.getByText("Continue with Facebook")).toBeInTheDocument();
    expect(screen.getByText("Continue with Google")).toBeInTheDocument();
    expect(screen.getByText("Continue with LinkedIn")).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  })
});
