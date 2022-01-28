/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
 import WelcomePage from "../src/components/investor/questions/WelcomePage";
 import createMockRouter from 'src/test-utils/createMockRouter';
 import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from "@testing-library/user-event";

 describe("WelcomePage", () => {
     
    beforeEach(() => {
        render(<WelcomePage />);
    })
 
   //Test for Background Images
   it('should have the Images', async () => {
     const Image = await screen.queryByTestId('welcome-image');
     expect(Image).toBeInTheDocument();
   });
   //Test for heading 
   it('should have the mandatory texts', () => {
       expect(screen.getByText("All set, let’s have some fun! 😉")).toBeInTheDocument();
   })
   //Test for Button
   it('should have the button', () => {
       expect(screen.getByTestId('discovering-btn')).toBeInTheDocument();
   })
 
   afterEach(() => {
     cleanup();
   });
 });

 describe('Email Verification Router', () => {
    let router = createMockRouter({});
    beforeEach(() => {
        render(
            <RouterContext.Provider value={router}>
              <WelcomePage />
            </RouterContext.Provider>
        );
    });
    //Test for go to dashboard
    it('It should go to dashboard', async () => {
    await waitFor( () => {
        userEvent.click(screen.getByText('Start discovering'));
        expect(router.push).toHaveBeenCalledWith('/dashboard');
    });
    });
  });
 