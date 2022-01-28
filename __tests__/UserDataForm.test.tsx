/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserDataPage from 'pages/signup/user-data';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('SignUp/UserData Page', () => {
  beforeEach(() => {
    render(
        <UserDataPage />
    );
  });
  //Test for Left sided Background Image 
  it("Should have a left background image", () => {
    waitFor(() => {
      expect(screen.getByTestId("background")).toHaveStyle("background: url('/type_of_user_form.png no-repeat')");
    });
  });
  //Test for Labels
  it('Should have the labels', () => {
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Mobile Number')).toBeInTheDocument();
  });
  // Test for Input Values
  it('Input fields should be filled with proper values', () => {
    userEvent.type(screen.getByLabelText("Username"), 'TestUser')
    userEvent.type(screen.getByLabelText('First Name'), 'Test')
    userEvent.type(screen.getByLabelText('Last Name'), 'User')
    userEvent.type(screen.getByLabelText("E-mail"), 'john.dee@gmail.com')
    userEvent.type(screen.getByLabelText("Mobile Number"), '1234567890')
    expect(screen.getByLabelText("Username")).toHaveValue('TestUser')
    expect(screen.getByLabelText("First Name")).toHaveValue('Test')
    expect(screen.getByLabelText("Last Name")).toHaveValue('User')
    expect(screen.getByLabelText("E-mail")).toHaveValue('john.dee@gmail.com')
    expect(screen.getByLabelText("Mobile Number")).toHaveValue('1234567890')
  })
  // Test for Profile Texts
  it('Should render ideal profile and personal profile texts', () => {
    expect(screen.getByText('Create your ideal profile')).toBeInTheDocument();
    expect(screen.getByText('All fields are required')).toBeInTheDocument();
    expect(screen.getByText('Please complete your personal profile')).toBeInTheDocument();
  });
  // Test for Progress bar
  it('Should have 80% Progress Bar', () => {
    waitFor(() => {
      expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
      expect(screen.getByTestId('progress-bar')).toHaveValue(80);
      });
  });
  // Test for Loader Image 
  it('Should have a loader on Confirm', () => {
    fireEvent.click(screen.getByText('Continue'));
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    cleanup()
  })
});


describe("UserData Form Router", () => {
  let router = createMockRouter({});
  
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <UserDataPage />
      </RouterContext.Provider>
    );
  });
  //Test for route to /signup/onboarding/email-verification
  it("It should go to verification email step after submitting", () => {
    fireEvent.click(screen.getByText('Continue'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/onboarding/email-verification');
    });
  });
  //Test for route to go back to previous page
  it("It should go back to previous page", () => {
    fireEvent.click(screen.getByTestId('back-btn'));
    waitFor(() => {
      expect(router.back).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanup()
  })
});
