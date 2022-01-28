/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor, cleanup,fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SignInForm from "src/components/signin/SignInForm";
import LogoBrandingSection from "src/components/common/LogoBrandingSection";
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe("LogoBrandingSection", () => {
  it("Should have a left background image", () => {
    //Test for background left sided image
    render(<LogoBrandingSection />);
    waitFor(() => {
      expect(screen.getByTestId("background")).toHaveStyle("background: url('/sign_in_img.png no-repeat')");
      cleanup();
    });
  });
});

describe("SignInForm", () => {

  beforeEach(() => {
      render(<SignInForm />);
  })
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
  //Test for Password visibility
  it("Password Visibility click to show password", () => {
    fireEvent.click(screen.getByTestId('visibility-off'));
    waitFor(() => {
      expect(screen.getByTestId('Password')).toHaveAttribute("type", "text")
    });
  });
  //Test for labels
  it("Should render Email and password Label", () => {
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });
  //Test for Social Buttons
  it("Should render social login buttons", () => {
    expect(screen.getByText("or")).toBeInTheDocument();
    expect(screen.getByText("Continue with Facebook")).toBeInTheDocument();
    expect(screen.getByText("Continue with Google")).toBeInTheDocument();
    expect(screen.getByText("Continue with LinkedIn")).toBeInTheDocument();
  });
  //Test for Input Fields
  it('Input fields should be filled with proper values', () => {
    userEvent.type(screen.getByLabelText("E-mail"), 'john.dee@gmail.com')
    userEvent.type(screen.getByLabelText("Password"), 'Test@123')
    expect(screen.getByLabelText("E-mail")).toHaveValue('john.dee@gmail.com'),
    expect(screen.getByLabelText("Password")).toHaveValue('Test@123')
  });
  //Test for loader image
  it('Should have a loader on Confirm', () => {
    fireEvent.click(screen.getByTestId('sign-in-button'));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    cleanup();
  })
});

describe("SignIn Form submission", () => {
  let router = createMockRouter({});
  //Test for route to /dashboard
  it("should have to go to /dashboard clicking Sign In", () => {
    render(
      <RouterContext.Provider value={router}>
        <SignInForm />
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByTestId('sign-in-button'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/dashboard');
      
      cleanup();
    });
  });
});
