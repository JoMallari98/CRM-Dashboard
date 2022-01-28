/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PhoneVerificationPage from 'pages/signup/onboarding/phone-verification';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('PhoneVerification Page', () => {
  beforeEach(() => {
    render(<PhoneVerificationPage />);
  });
  // Test for left sided background Image
  it('Should render background image', () => {
    waitFor(() => {
      expect(screen.getByTestId('background')).toHaveStyle(
        "background: url('/Verification_code.png no-repeat')"
      );
    });
  });
  // Test for mandatory Texts
  it('Should render verify phone and other mandatory texts', () => {
    waitFor(() => {
      expect(screen.getByText('Verify Phone Number')).toBeInTheDocument();
      expect(
        screen.getByText('Please enter your verification code we sent to +1XXX-XXX-XXXX')
      ).toBeInTheDocument();
      expect(screen.getByTestId('receive-code')).toBeInTheDocument();
    });
  });
  //Test to render the 6 inputs
  it('should render 6 inputs', () => {
    for (let i = 0; i < 5; i++) {
      expect(screen.getByTestId(`six-digit-input-${i}`)).toBeInTheDocument();
    }
  });
  //Test to check the valid code
  it('should have the valid code for phone', () => {
    for (let i = 0; i < 5; i++) {
      const input = screen.getByTestId(`six-digit-input-${i}`);
      userEvent.type(input, `${i + 1}`);
    }
    fireEvent.click(screen.getByText('Submit'));
    waitFor(() => {
    for (let i = 0; i < 5; i++) {
      const input = screen.getByTestId(`six-digit-input-${i}`);
      expect(!input).toHaveValue(i + 1);
    }
  });
  });
  //Test to set focus after input
  it('should focus to the next input after inputing number', async () => {
    const input = screen.getByTestId('six-digit-input-0');
    const input2 = screen.getByTestId('six-digit-input-1');
    userEvent.type(input, '5');
    expect(input).toHaveValue(5);
    expect(input2).toHaveFocus();
  });
  //Test to limit value from 0-9
  it('should limit input to 0-9', async () => {
    const input = screen.getByTestId('six-digit-input-0');
    userEvent.type(input, '1');
    expect(input).toHaveValue(1);
  });
  //Test to limit value from 0-9
  it('should limit input to 0-9', async () => {
    const input = screen.getByTestId('six-digit-input-0');
    userEvent.type(input, '10');
    expect(input).toHaveValue(1);
  });
  //Test to limit value from 0-9
  it('should limit input to 0-9', async () => {
    const input = screen.getByTestId('six-digit-input-0');
    userEvent.type(input, '90');
    expect(input).toHaveValue(9);
  });
  //Test for Invalid Code Flow
  it('Invalid code flow, user enter invalid code and on confirm, it should show toaster, clear inputs and focus on first input', () => {
      for (let i = 0; i < 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        userEvent.type(input, `${i + 2}`);
      }
      fireEvent.click(screen.getByText('Submit'));
      waitFor(() => {
      for (let i = 0; i < 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        expect(!input).toHaveValue(i + 1);
      }
      expect(screen.getByText('validation-error')).toBeInTheDocument();
      for (let i = 0; i < 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        if ((i = 0)) {
          expect(input).toHaveFocus();
        } else {
          userEvent.type(input, '');
        }
      }
    });
  });
  //Test for Loader Image
  it('Should have a loader on Confirm', () => {
    fireEvent.click(screen.getByText('Submit'));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  //Test for resend code PopUp
  it('Should Render a PopUp after clicking Resend Code', () => {
    expect(screen.getByText('Resend code')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("resend-code-btn"));
    waitFor(() => {
      expect(screen.getByTestId('popup-component')).toBeInTheDocument();
      expect(screen.getByText('Resend a code to my mobile phone')).toBeInTheDocument();
      expect(screen.getByText('Please confirm your mobile phone number and request a new code')).toBeInTheDocument();
      expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
      expect(screen.getByTestId('code-btn')).toBeInTheDocument();
      userEvent.type(screen.getByTestId('input-test'), '1234456789');
      expect(screen.getByTestId('input-test')).toHaveValue('1234456789');
    });
  });
  //Test for Send Button loader Image
  it('Should Have a loader on Send Code Button', () => {
    fireEvent.click(screen.getByTestId("resend-code-btn"));
    fireEvent.click(screen.getByTestId("code-btn"));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  // Test for Change Phone Number Click PopUp
  it('Should Render a PopUp after clicking Change Phone Number', () => {
    expect(screen.getByText('Change phone number')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("change-phone-btn"));
    waitFor(() => {
      expect(screen.getByTestId('popup-component')).toBeInTheDocument();
      expect(screen.getByText('Change phone number')).toBeInTheDocument();
      expect(screen.getByText('Please enter another phone number to confirm your identity')).toBeInTheDocument();
      expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
      expect(screen.getByTestId('code-btn')).toBeInTheDocument();
    });
  });
  // Test for Confirm Button PopUp 
  it('Should Have a loader on popup Confirm Button', () => {
    fireEvent.click(screen.getByTestId("change-phone-btn"));
    fireEvent.click(screen.getByTestId("code-btn"));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    cleanup();
  });
});

describe('Phone Verification Router', () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <PhoneVerificationPage />
      </RouterContext.Provider>
    );
  });
  // Test for route to /signup/user-type
  it('It should go to user-type page', () => {
    fireEvent.click(screen.getByText('Submit'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/user-type');
    });
  });
  // Test for go back to previous page 
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
