/**
 * @jest-environment jsdom
 */

import UserType from 'pages/signup/user-type';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('UserType Page', () => {

    it('Investor User Event', () => {
      let router = createMockRouter({});
      render(
        <RouterContext.Provider value={router}>
          <UserType />
        </RouterContext.Provider>
      );

      fireEvent.click(screen.getByTestId('investor-button'));
      expect(router.replace).toHaveBeenCalledWith('/signup/user-institution');
    });

    it('Finacial User Event', () => {
      let router = createMockRouter({});
      render(
        <RouterContext.Provider value={router}>
          <UserType />
        </RouterContext.Provider>
      );

      fireEvent.click(screen.getByTestId('financial-button'));
      expect(router.replace).toHaveBeenCalledWith('/signup/user-institution');
    });
  });
