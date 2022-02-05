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
    expect(screen.getByTestId("background")).toHaveStyle("background: url('/assets/images/Verification_code.png') no-repeat");
  });
  // Test for mandatory Texts
  it('Should render verify phone and other mandatory texts', () => {
      expect(screen.getByText('Verify Phone Number')).toBeInTheDocument();
      expect(
        screen.getByText(
          /please enter the verification code we sent to \+1xxx\-xxx\-xxxx/i)).toBeInTheDocument();
      expect(screen.getByRole('link', {
        name: /resend code/i
      })).toBeInTheDocument();
  });
  //Test to render the 6 inputs
  it('should render 6 inputs', () => {
    for (let i = 0; i < 5; i++) {
      expect(screen.getByTestId(`six-digit-input-${i}`)).toBeInTheDocument();
    }
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
  it('Invalid code flow, user enter invalid code and on confirm, it should clear inputs and focus on first input', async () => {
      for (let i = 0; i < 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        userEvent.type(input, `${i + 2}`);
      }
      fireEvent.click(screen.getByText('Submit'));
      await waitFor(() => {
      for (let i = 0; i < 5; i++) {
        const input = screen.getByTestId(`six-digit-input-${i}`);
        expect(input).toHaveValue(i + 2);
      }
    });
  });
  //Test for resend code PopUp
  it('Should Render a PopUp after clicking Resend Code', async () => {
    expect(screen.getByText('Resend code')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("resend-code-btn"));
   await waitFor(() => {
      expect(screen.getByTestId('popup-component')).toBeInTheDocument();
      expect(screen.getByText('Resend a code to my mobile phone')).toBeInTheDocument();
      expect(screen.getByText('Please confirm your mobile phone number and request a new code')).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/1 \(702\) 123\-4567/i)).toBeInTheDocument();
      expect(screen.getByTestId('code-btn')).toBeInTheDocument();
      userEvent.type(screen.getByPlaceholderText(/1 \(702\) 123\-4567/i), '1234567890');
      expect(screen.getByPlaceholderText(/1 \(702\) 123\-4567/i)).toHaveValue('+1 (012) 345-6789');
    });
  });
  // Test for Change Phone Number Click PopUp
  it('Should Render a PopUp after clicking Change Phone Number', async () => {
    expect(screen.getByText('Change phone number')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("change-phone-btn"));
    await waitFor(() => {
      expect(screen.getByTestId('popup-component')).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /change phone number/i })).toBeInTheDocument();
      expect(screen.getByText('Please enter another phone number to confirm your identity')).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/1 \(702\) 123\-4567/i)).toBeInTheDocument();
      expect(screen.getByTestId('code-btn')).toBeInTheDocument();
    });
  });
  // Test for Confirm Button PopUp 
  it('Should Have a loader on popup Confirm Button', async () => {
    fireEvent.click(screen.getByTestId("change-phone-btn"));
    fireEvent.click(screen.getByTestId("code-btn"));
    await waitFor(() => {
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
  it('It should go to user-type page', async () => {
    for (let i = 0; i <= 5; i++) {
      const input = await screen.findByTestId(`six-digit-input-${i}`);
      userEvent.type(input, `${i + 1}`);
    }
    fireEvent.click(screen.getByText('Submit'));
    for (let i = 0; i <= 5; i++) {
      const input = await screen.findByTestId(`six-digit-input-${i}`);
      expect(input).toHaveValue(i + 1);
    }   
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/user-type');
    },{
      timeout: 4000,
    })
  });
  // Test for go back to previous page 
  it('It should go back to previous page', async () => {
    fireEvent.click(screen.getByTestId('back-btn'));
    await waitFor(() => {
      expect(router.back).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanup();
  });
});
