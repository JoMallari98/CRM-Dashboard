/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SignUpForm from "src/components/signup/SignUpForm";
import createMockRouter from 'src/test-utils/createMockRouter';
import LogoBrandingSection from "src/components/common/LogoBrandingSection";
import { RouterContext } from 'next/dist/shared/lib/router-context';


describe("LogoBrandingSection", () => {
  //Test for background left sided image
  it("Should have a left background image", () => {
    render(<LogoBrandingSection />);
    waitFor(() => {
      expect(screen.getByTestId("background")).toHaveStyle("background: url('/sign_up_img.png no-repeat')");

      cleanup();
    });
  });
});


describe("SignUpForm", () => {

  beforeEach(() => {
      render(<SignUpForm />);
  })
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
    waitFor(() => {
      expect(screen.getByTestId('Password')).toHaveAttribute("type", "text")
    });
  });
  // Test for Input fields
  it('Input fields should be filled with proper values', () => {
    userEvent.type(screen.getByLabelText("Enter your email"), 'john.dee@gmail.com')
    userEvent.type(screen.getByLabelText("Enter your password"), 'Test@123')
    expect(screen.getByLabelText("Enter your email")).toHaveValue('john.dee@gmail.com'),
    expect(screen.getByLabelText("Enter your password")).toHaveValue('Test@123')
  });
  //Test for Loader Image
  it('Should have a loader on Confirm', () => {
    fireEvent.click(screen.getByTestId('sign-up-button'));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    cleanup()
  })
});

describe("SignIn Form submission", () => {
  let router = createMockRouter({});
  // Test for route to /signup/user-data
  it("should have to /signup/user-data after clicking Sign Up", () => {
    render(
      <RouterContext.Provider value={router}>
        <SignUpForm />
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByTestId('sign-up-button'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/user-data');
      cleanup();
    });
  }); 
});
