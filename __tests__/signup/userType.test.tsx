/**
 * @jest-environment jsdom
 */

import UserType from 'pages/signup/user-type';
import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('UserType Page', () => {
  beforeEach(() => {
    render(<UserType />);
  })
  //Test for Left sided Background Image 
  it("Should render background image", () => {
    expect(screen.getByTestId("background")).toHaveStyle(`background: url('/assets/images/user_type1.png') no-repeat`);
  });
  //Test For Text Present on the Screen
  it('Should render ideal profile and other mandatory texts', () => {
      expect(screen.getByText('Create your ideal profile')).toBeInTheDocument()
      expect(screen.getByText('By the way would you like to register as an investor or a financial professional?')).toBeInTheDocument();
  });
  //Test for Progress Bar
  it('Should have 20% Progress Bar', () => {
      expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
      expect(screen.getByTestId('progress-bar')).toHaveAttribute("aria-valuenow", "20");
  });

  afterEach(() => {
    cleanup()
  })
 });


  describe("User Type Page Routing", () => {
    let router = createMockRouter({});
    beforeEach(() => {
      render(
        <RouterContext.Provider value={router}>
          <UserType />
        </RouterContext.Provider>
      );
    });
  //Test for route to /signup/user-institution
    it("Investor User Event", () => {
      fireEvent.click(screen.getByTestId('investor-button'));
      expect(router.push).toHaveBeenCalledWith('/signup/user-institution');
    });
  //Test for route to /signup/ideal-profile
    it("Financial User Event", () => {
      fireEvent.click(screen.getByTestId('financial-button'));
      expect(router.push).toHaveBeenCalledWith('/signup/ideal-profile');
    });
  //Test for go back to previous Screen
    it("It should go back to previous page", () => {
      fireEvent.click(screen.getByTestId('back-btn'));
        expect(router.back).toHaveBeenCalled();
    });
  
    afterEach(() => {
      cleanup()
    })
  });