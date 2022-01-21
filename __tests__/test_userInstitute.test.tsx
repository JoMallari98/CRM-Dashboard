/**
 * @jest-environment jsdom
 */

import UserInstitute from 'pages/signup/user-institution';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('UserInstitute Page', () => {
  it('Yes I do Event', () => {
    let router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <UserInstitute />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('Yes-i-do-button'));
    expect(router.replace).toHaveBeenCalledWith('/signup/ideal-profile');
  });

  it("No, I don't Event", () => {
    let router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <UserInstitute />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('No-i-cannot-button'));
    expect(router.replace).toHaveBeenCalledWith('/signup/ideal-profile');
  });
});
