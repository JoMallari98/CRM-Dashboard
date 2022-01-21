/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserDataPage from 'pages/signup/user-data';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('SignUp/UserData Page', () => {
	let router = createMockRouter({});
  // let context = createMockInvestorContext();
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <UserDataPage />
      </RouterContext.Provider>
    );
  });

  it('Should have fields rendered', () => {
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Mobile Number')).toBeInTheDocument();
  });

  it('It should go to verification email step after submitting', () => {
    waitFor(() => {
			fireEvent.click(screen.getByText('Continue'));
      expect(router.replace).toHaveBeenCalledWith('/signup/onboarding/email-verification');
    });
  });
});
