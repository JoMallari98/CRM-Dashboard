/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor, fireEvent, cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserDataPage from 'pages/signup/user-data';
import {Select} from "@mui/material";
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
      expect(screen.getByTestId("background")).toHaveStyle("background: url('/assets/images/type_of_user_form.png') no-repeat");
  });
  //Test for Labels
  it('Should have the labels', () => {
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/1 \(702\) 123\-4567/i)).toBeInTheDocument();
  });
  // Test the type of email select dropdown.
  it("Should select the email option from dropdown", () => {
    fireEvent.mouseDown(screen.getByRole('button', {
      name: /type of email ​/i
    }));

    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/work/i));
    // fireEvent.click(screen.getByRole('option', {
    //   name: /work/i
    // }));

    expect(screen.getByRole('button', {
      name: /type of email work/i
    })).toBeInTheDocument();
  });
  
  // Test for Input Values
  it('Input fields should be filled with proper values', async () => {
    userEvent.type(await screen.findByLabelText("Username"), 'TestUser')
    userEvent.type(await screen.findByLabelText('First Name'), 'Test')
    userEvent.type(await screen.findByLabelText('Last Name'), 'User')
    userEvent.type(await screen.findByLabelText("E-mail"), 'johndee@gmail.com')
    userEvent.type(await screen.getByPlaceholderText(/1 \(702\) 123\-4567/i), '1234567890')
    await waitFor(() => {
      fireEvent.click(screen.getByText('Continue'));
      expect(screen.getByLabelText("Username")).toHaveValue('TestUser')
      expect(screen.getByLabelText("First Name")).toHaveValue('Test')
      expect(screen.getByLabelText("Last Name")).toHaveValue('User')
      expect(screen.getByLabelText("E-mail")).toHaveValue('johndee@gmail.com')
      expect(screen.getByPlaceholderText(/1 \(702\) 123\-4567/i)).toHaveValue('+1 (123) 456-7890')  
    })
  })
  // Test for Profile Texts
  it('Should render ideal profile and personal profile texts', () => {
    expect(screen.getByText('Create your ideal profile')).toBeInTheDocument();
    expect(screen.getByText('All fields are required')).toBeInTheDocument();
    expect(screen.getByText('Please complete your personal profile')).toBeInTheDocument();
  });
  // Test for Progress bar
  it('Should have 80% Progress Bar', () => {
      expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
      expect(screen.getByTestId('progress-bar')).toHaveAttribute("aria-valuenow", "80");
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
