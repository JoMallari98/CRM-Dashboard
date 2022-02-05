/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import createMockRouter from '../src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import SignInForm from '../src/components/signin/SignInForm';


describe('SignIn Form submission', () => {
  let router = createMockRouter({});
	const handleSubmit = jest.fn();

  // Test for onSubmit Function called by formik, formik has provided a way to call the mock funtion and pass it to the component then the
  // mock function will return the value that are passed to that function by form control (formik). then we will push the router to /dashboard
	it.todo('SignIn form validation check', async () => {});
	// it('SignIn form validation check', async () => {
	// 	 render(
  //      <RouterContext.Provider value={router}>
  //        <SignInForm onSubmit={handleSubmit} />
  //      </RouterContext.Provider>
  //    );
  //   userEvent.type(screen.getByLabelText('Enter your email'), 'session@gmail.com');
  //   userEvent.type(screen.getByLabelText('Enter your password'), 'Test@123');
  //   expect(screen.getByLabelText('Enter your email')).toHaveValue('session@gmail.com');
  //   expect(screen.getByLabelText('Enter your password')).toHaveValue('Test@123');
  //   fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
  //   await waitFor(() => {
  //     expect(handleSubmit).toHaveBeenCalledWith({
  //       email: 'session@gmail.com',
  //       password: 'Test@123',
  //     });
  //   });
  // });

  
});
