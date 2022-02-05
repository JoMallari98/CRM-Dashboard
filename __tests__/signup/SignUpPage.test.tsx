/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SignUpPage from '../../pages/signup/index'

describe("SignUpPage", () => {

  beforeEach(() => {
      render(<SignUpPage />);
  })
  
  //Test for Left sided Background Image 
  it("Should have a left background image", () => {
    expect(screen.getByTestId("background")).toHaveStyle("background: url('/assets/images/sign_up_img.png') no-repeat");
  });
  // Test for Texts
  it("Should render text and link to Sign in screen", () => {
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toHaveAttribute("href", "/signin");
  });
  // Test for Sign Up Button
  it("Should render a link to Sign Up button", () => {
    expect(screen.getByTestId("sign-up-button")).toBeInTheDocument();
  });
  // Test for labels 
  it("Should render Email and password labels", () => {
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
  // Test for Password Visible Icon
  it("Password Visibility click to show password", () => {
    fireEvent.click(screen.getByTestId('visibility-off'));
    expect(screen.getByLabelText('Enter your password')).toHaveAttribute("type", "text")
  });

  afterEach(() => {
    cleanup()
  });
});
