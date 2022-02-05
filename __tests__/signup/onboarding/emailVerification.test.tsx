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
    expect(screen.getByTestId("background")).toHaveStyle("background: url('/assets/images/verification_img.png') no-repeat");
  });
  // Test for back button 
  it('Should render a back button icon', () => {
      expect(screen.getByRole('button', {name: /back/i})).toBeInTheDocument();
  });
  // Test for mandatory Texts
  it('Should render verify email and other mandatory texts', () => {
    expect(screen.getByText('Verify Email')).toBeInTheDocument();
    expect(screen.getByText(
      /we sent an email with a verification code to example@email\.com to continue please check your email and enter your code/i
      )).toBeInTheDocument();
    expect(screen.getByText(`Didn't receive the email?`)).toBeInTheDocument();
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
    expect(screen.getByTestId('popup-component')).toBeInTheDocument();
    expect(screen.getByText('Resend a code by email')).toBeInTheDocument();
    expect(screen.getByText('Please confirm your email address')).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByTestId('code-btn')).toBeInTheDocument();
    userEvent.type(screen.getByLabelText('E-mail'), 'example@gmail.com');
    fireEvent.click(screen.getByTestId('code-btn'));
    expect(screen.getByLabelText('E-mail')).toHaveValue('example@gmail.com');
  });
  // Test to render screen after invalid code
  it('Should render new component for invalid code', async () => {
    for (let i = 0; i <= 5; i++) {
      const input = screen.getByTestId(`six-digit-input-${i}`);
      fireEvent.focus(input)
      userEvent.type(input, `{selectall}${i + 2}`);
    }
      fireEvent.click(screen.getByText('Confirm'));
    await waitFor(() => {
      expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
      expect(screen.getByText(`You entered the wrong code, please`))
      expect(screen.getByText(/try again/i)).toBeInTheDocument();
      expect(screen.getByText(/or/i)).toBeInTheDocument();
      expect(screen.getByText(/request another code/i)).toBeInTheDocument();
    }, {
      timeout: 4000,
    })
  });
  // Test to render a new component after clicking on send code button
  it('Should render new component for try again', async () => {
    for (let i = 0; i <= 5; i++) {
      const input = screen.getByTestId(`six-digit-input-${i}`);
      userEvent.type(input, `${i + 2}`);
    }
    fireEvent.click(screen.getByText('Confirm'));
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("try-again"));
    }, {
      timeout: 4000,
    })
      expect(screen.getByText(`Another try 😅`)).toBeInTheDocument();
      expect(screen.getByText(/We sent a new email with a verification code to example@email.com To continue please check your email and enter your code./i)).toBeInTheDocument();
      expect(screen.getByText(/If you can’t find our message, please check your spam box./i)).toBeInTheDocument();
      expect(screen.getByText(/Didn't receive the email?/i)).toBeInTheDocument();
      expect(screen.getByText(/Change email address/i)).toBeInTheDocument();
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
  it('It should go to verification Phone step after submitting', async () => {
    for (let i = 0; i <= 5; i++) {
      const input = await screen.findByTestId(`six-digit-input-${i}`);
      userEvent.type(input, `${i + 1}`);
    }
    fireEvent.click(screen.getByText('Confirm'));
    for (let i = 0; i <= 5; i++) {
      const input = await screen.findByTestId(`six-digit-input-${i}`);
      expect(input).toHaveValue(i + 1);
    }   
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/onboarding/phone-verification');
    },{
      timeout: 4000,
    })
  });
  // Test to go back to previous page
  it('It should go back to previous page', () => {
    fireEvent.click(screen.getByTestId('back-btn'));
    expect(router.back).toHaveBeenCalled();
  });

  afterEach(() => {
    cleanup();
  });
});
