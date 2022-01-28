/**
 * @jest-environment jsdom
 */

import UserInstitute from 'pages/signup/user-institution';
import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('UserInstitute Page', () => {
  beforeEach(() => {
    render(<UserInstitute />);
  });
  //Test for Left sided Background Image 
  it('Should render background image', () => {
    waitFor(() => {
      expect(screen.getByTestId('background')).toHaveStyle(
        "background: url('/institute.png no-repeat')"
      );
    });
  });
  //Test For Text Present on the Screen
  it('Should render mandatory texts', () => {
    waitFor(() => {
      expect(screen.getByText('Create your ideal profile')).toBeInTheDocument();
      expect(screen.getByText('Do you work for a financial institution?')).toBeInTheDocument();
    });
  });
  //Test for Progress Bar
  it('Should have 45% Progress Bar', () => {
    waitFor(() => {
      expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
      expect(screen.getByTestId('progress-bar')).toHaveValue(45);
    });
  });

  afterEach(() => {
    cleanup();
  });
});

describe('User Institute Page Routing', () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <UserInstitute />
      </RouterContext.Provider>
    );
  });
  //Test for route to /signup/ideal-profile
  it('Should Go to signup/ideal-profile', () => {
    fireEvent.click(screen.getByTestId('Yes-i-do-button'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/ideal-profile');
    });
  });
  //Test for route to /signup/questions
  it('Should Go to signup/questions', () => {
    fireEvent.click(screen.getByTestId('No-i-cannot-button'));
    waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/signup/questions');
    });
  });
  //Test for go back to previous Screen
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
