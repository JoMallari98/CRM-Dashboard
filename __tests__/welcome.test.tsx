/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import WelcomePage from "pages/welcome";
import createMockRouter from 'src/test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe("WelcomePage", () => {
  let router = createMockRouter({});
  
  //Test for Logo
  it('should have the SVG logo with text', async () => {
    render(<WelcomePage />);
    const SVG = await screen.queryByTestId('logo');
    expect(SVG).toBeInTheDocument();
    expect(screen.getByText('LOGO')).toBeInTheDocument();
  });

  //Test for Background Images
  it('should have the Images', async () => {
    render(<WelcomePage />);
    const SVG = await screen.queryByTestId('inner-images');
    expect(SVG).toBeInTheDocument();
  });

  //Test for Text Present on the Screen
  it('should render a section to welcome the user', () => {
    render(<WelcomePage />);

    expect(screen.getByText('Hello, User.')).toBeInTheDocument();
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    ).toBeInTheDocument();
    expect(screen.getByText("Let's Start")).toBeInTheDocument();
  });

  // Test for the link to signin page
  // We useually simulate browser events because, often, we don't want to require a real browser in our test environment, especially here in unit tests.
  // We seem to be testing the framework: if you test that the "Let's Start" text matches a Link with the right "href", it seems to me that you are done, as you should trust the Link component to handle the redirection
  it("should have to /signin after clicking Let's Start", () => {
    render(
      <RouterContext.Provider value={router}>
        <WelcomePage />
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByTestId('start-btn'));
    expect(screen.getByText("Let's Start")).toHaveAttribute('href', '/signin');
  });

  afterEach(() => {
    cleanup();
  });
});
