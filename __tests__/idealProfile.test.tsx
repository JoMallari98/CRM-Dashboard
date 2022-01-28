/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import IdealProfile from '../pages/signup/ideal-profile'
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from 'src/test-utils/createMockRouter';

describe('UserTypeForm Page', () => {
  beforeEach(() => {
    render(<IdealProfile />);
  })
  // Test for left sided Background Image
  it("Should render background image", () => {
    waitFor(() => {
      expect(screen.getByTestId("background")).toHaveStyle("background: url('/institute.png no-repeat')");
    });
  });
  // Test for choosing the type of user
  it('Should allow the user to choose which type he/she is', () => {
    expect(screen.getByText('An investment advisor')).toBeInTheDocument();
    expect(screen.getByText('Employed at an advisory firm')).toBeInTheDocument();
    expect(screen.getByText('A registered broker')).toBeInTheDocument();
    expect(screen.getByText('Employed at a brokerage firm')).toBeInTheDocument();
    expect(screen.getByText('Employed by a financial institution')
    ).toBeInTheDocument();
  });
  // Test for mandatory texts
  it('Should render mandatory texts', () => {
    waitFor(() => {
      expect(screen.getByText('Create your ideal profile')).toBeInTheDocument()
      expect(screen.getByText('Tell us more about you')).toBeInTheDocument();
      expect(screen.getByText('"I am ..."')).toBeInTheDocument();
    });
  });
  // Test for progress bar
  it('Should have 60% Progress Bar', () => {
    waitFor(() => {
      expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
      expect(screen.getByTestId('progress-bar')).toHaveValue(60);
    });
  });

  afterEach(() => {
    cleanup()
  })
  
});

describe('UserTypeForm Router', () => {
  let router = createMockRouter({});
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <IdealProfile />
      </RouterContext.Provider>
    );
  });
  // Test for route to go to /signup/questions
  it('It should redirect investors to investor onboarding', () => {
    fireEvent.click(screen.getByText('An investment advisor'));
    expect(router.push).toHaveBeenCalledWith('/signup/questions');
  });
  // Test for route to go to /signup/questions
  it('It should redirect non-rep to investor onboarding', () => {
    fireEvent.click(screen.getByText('Employed at an advisory firm'));
    expect(router.push).toHaveBeenCalledWith('/signup/questions');
  });
  // Test for route to go to /signup/questions
  it('It should redirect non-rep to investor onboarding', () => {
    fireEvent.click(screen.getByText('A registered broker'));
    expect(router.push).toHaveBeenCalledWith('/signup/questions');
  });
  // Test for route to go to /signup/questions
  it('It should redirect non-rep to investor onboarding', () => {
    fireEvent.click(screen.getByText('Employed at a brokerage firm'));
    expect(router.push).toHaveBeenCalledWith('/signup/questions');
  });
  // Test for route to go to /signup/questions
  it('It should redirect non-rep to investor onboarding', () => {
    const text = 'Employed by a financial institution';
    fireEvent.click(screen.getByText(text));
    expect(router.push).toHaveBeenCalledWith('/signup/questions');
  });
  // Test for route to go back to previous page
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
