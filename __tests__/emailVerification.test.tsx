/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailVerificationPage from 'pages/signup/onboarding/email-verification';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('EmailVerification Page', () => {
  beforeEach(() => {
    render(<EmailVerificationPage />);
  });
  // Test for left sided background Image
  it('Should render background image', () => {
    waitFor(() => {
      expect(screen.getByTestId('background')).toHaveStyle(
        "background: url('/verification_img.png no-repeat')"
      );
    });
  });
  // Test for back button 
  it('Should render a back button icon', () => {
      expect(screen.getByTestId('back-icon')).toBeInTheDocument();
  });
  // Test for mandatory Texts
  it('Should render verify email and other mandatory texts', () => {
    expect(screen.getByText('Verify Email')).toBeInTheDocument();
    expect(screen.getByTestId("email-description")).toBeInTheDocument();
    expect(screen.getByText(`Didn't receive a email?`)).toBeInTheDocument();
  });
  // Test for disable button
  it('Button Should be disabled on render', () => {
    expect(screen.getByText("Confirm")).toBeDisabled()
  });
  //Test to render the 6 inputs
  it('should render 6 inputs', () => {
    for (let i = 0; i <= 5; i++) {
      expect(screen.getByTestId(`six-digit-input-${i}`)).toBeInTheDocument();
    }
  });
  //Test to set focus after input
  it('should focus to the next input after inputing number', () => {
    const input = screen.getByTestId('six-digit-input-0');
    const input2 = screen.getByTestId('six-digit-input-1');
    userEvent.type(input, '5');
    expect(input).toHaveValue(5);
    expect(input2).toHaveFocus();
  });
  //Test to limit value from 0-9
  it('should limit input to 0-9', () => {
    const input = screen.getByTestId('six-digit-input-0');
    userEvent.type(input, '1');
    expect(input).toHaveValue(1);
  });
  //Test to limit value from 0-9
  it('should limit input to 0-9', () => {
    const input = screen.getByTestId('six-digit-input-0');
    userEvent.type(input, '10');
    expect(input).toHaveValue(1);
  });
  //Test to limit value from 0-9
  it('should limit input to 0-9', () => {
    const input = screen.getByTestId('six-digit-input-0');
    userEvent.type(input, '90');
    expect(input).toHaveValue(9);
  });
  //Test to check the valid code
  it('should have the valid code for email', () => {
      for (let i = 0; i <= 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        userEvent.type(input, `${i + 1}`);
      }
      fireEvent.click(screen.getByText('Confirm'));
      waitFor(() => {
      for (let i = 0; i <= 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        expect(!input).toHaveValue(i + 1);
      }
    });
  });
  // Test to check the invalid code
  it('Invalid code flow, user enter invalid code and on confirm, it should show toaster, clear inputs and focus on first input', () => {
      for (let i = 0; i <= 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        userEvent.type(input, `${i + 2}`);
      }
      fireEvent.click(screen.getByText('Confirm'));
      waitFor(() => {
      for (let i = 0; i <= 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        expect(!input).toHaveValue(i + 1);
      }
      expect(screen.getByText('validation-error')).toBeInTheDocument();
      for (let i = 0; i <= 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        if ((i = 0)) {
          expect(input).toHaveFocus();
        } else {
          userEvent.type(input, '');
        }
      }
    });
  });
  // Test to check the loader
  it('Should have a loader on Confirm', () => {
    fireEvent.click(screen.getByText('Confirm'));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  // Test to check the resend code popUp
  it('Should Render a PopUp after clicking Resend Code', () => {
    expect(screen.getByText('Resend email')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("resend-code-btn"));
    waitFor(() => {
      expect(screen.getByTestId('popup-component')).toBeInTheDocument();
      expect(screen.getByText('Resend a code by email')).toBeInTheDocument();
      expect(screen.getByText('Please confirm your email address')).toBeInTheDocument();
      expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
      expect(screen.getByTestId('code-btn')).toBeInTheDocument();
      userEvent.type(screen.getByTestId('input-test'), 'example@gmail.com');
      expect(screen.getByTestId('input-test')).toHaveValue('example@gmail.com');
    });
  });
  // Test to check the Send Code Button 
  it('Should Have a loader on Send Code Button', () => {
    fireEvent.click(screen.getByTestId("resend-code-btn"));
    fireEvent.click(screen.getByTestId("code-btn"));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  // Test to render screen after invalid code
  it('Should render new component for invalid code', () => {
    fireEvent.click(screen.getByText("Confirm"));
    waitFor(() => {
      expect(screen.getByText('Oops! 😬')).toBeInTheDocument();
      expect(screen.getByText('You entered the wrong code, please'))
      expect(screen.getByText('try again ')).toBeInTheDocument();
      expect(screen.getByText('or')).toBeInTheDocument();
      expect(screen.getByText('request another code')).toBeInTheDocument();
    });
  });
  // Test to render a new component after clicking on send code button
  it('Should render new component for try again', () => {
    fireEvent.click(screen.getByText("Confirm"));
    waitFor(() => {
      fireEvent.click(screen.getByTestId("try-again"));
      expect(screen.getByText(`Another try 😅`)).toBeInTheDocument();
      expect(screen.getByText(`We sent a new email with a verification code to
      example@email.com
      To continue please check your email and enter your code.
      `))
      expect(screen.getByText('If you can’t find our message, please check your spam box. ')).toBeInTheDocument();
      expect(screen.getByText(`Didn't receive a email?`)).toBeInTheDocument();
      expect(screen.getByText(`Change email address`)).toBeInTheDocument();
    });
  });


  afterEach(() => {
    cleanup();
  });
});

describe('Email Verification Router', () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <EmailVerificationPage />
      </RouterContext.Provider>
    );
  });
  // Test to go to route /signup/onboarding/phone-verification
  it('It should go to verification Phone step after submitting', () => {
    fireEvent.click(screen.getByText('Confirm'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/onboarding/phone-verification');
    });
  });
  // Test to go back to previous page
  it('It should go back to previous page', () => {
    fireEvent.click(screen.getByTestId('back-btn'));
    waitFor(() => {
      expect(router.back).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanup();
  });
});
