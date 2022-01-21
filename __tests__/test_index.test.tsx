/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from 'pages/index';

describe('HomePage', () => {
    //Test for Logo 
  it('should have the SVG logo with text', async () => {
    render(<HomePage />);
    const SVG = await screen.queryByTestId('logo');
    expect(SVG).toBeInTheDocument();
    expect(screen.getByText('LOGO')).toBeInTheDocument();
  });
    //Test for Background Images 
  it('should have the Images', async () => {
    render(<HomePage />);
    const SVG = await screen.queryByTestId('inner-images');
    expect(SVG).toBeInTheDocument();
  });
      //Test for Text Present on the Screen 
  it('should render a section to welcome the user', () => {
    render(<HomePage />);

    expect(screen.getByText('Hello, User.')).toBeInTheDocument();
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    ).toBeInTheDocument();
    expect(screen.getByText("Let's Start")).toBeInTheDocument();
  });
    //Test for the link to signin page
  it("should have to /signin after clicking Let's Start", () => {
    render(<HomePage />);

    expect(screen.getByText("Let's Start")).toHaveProperty('href', 'http://localhost/signin');
  });
});
