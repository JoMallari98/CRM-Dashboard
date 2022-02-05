/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import createMockRouter from '../../src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import SignUpForm from '../../src/components/signup/SignUpForm';

describe('SignUp Form submission', () => {
  // Test for onSubmit Function called by formik, formik has provided a way to call the mock funtion and pass it to the component then the
  // mock function will return the value that are passed to that function by form control (formik). then we will push the router to /signup/user-data
  // @ts-ignore
  it.toDo('SignUp form validation check', async (done) => {});
  // it('SignUp form validation check', async (done) => {
  //   let router = createMockRouter({});
  //   const handleSubmit = jest.fn();

  //   render(
  //     <RouterContext.Provider value={router}>
  //       <SignUpForm onSubmit={handleSubmit} />
  //     </RouterContext.Provider>
  //   );
  //   userEvent.type(screen.getByLabelText('Enter your email'), 'register@gmail.com');
  //   userEvent.type(screen.getByLabelText('Enter your password'), 'Testing@123');
  //   expect(screen.getByLabelText('Enter your email')).toHaveValue('register@gmail.com');
  //   expect(screen.getByLabelText('Enter your password')).toHaveValue('Testing@123');

  //   fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
  //   await waitFor(() => {
  //     expect(handleSubmit).toHaveBeenCalledWith({
  //       email: 'register@gmail.com',
  //       password: 'Testing@123',
  //     });
  //     done();
  //   });
  // }, 30000);

});
