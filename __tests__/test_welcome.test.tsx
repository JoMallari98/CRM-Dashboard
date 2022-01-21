/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomePage from "pages/welcome";

describe("WelcomePage", () => {
  it("should have the SVG logo with text", async () => {
    render(<WelcomePage />);
    const SVG = await screen.queryByTestId('logo')
    expect(SVG).toBeInTheDocument();
    expect(
      screen.getByText('LOGO')
    ).toBeInTheDocument();
  });
  
  it("should have the Images", async () => {
    render(<WelcomePage />);
    const SVG = await screen.queryByTestId('inner-images');
    expect(SVG).toBeInTheDocument();
  });
  
  it('should render a section to welcome the user', () => {
    render(<WelcomePage />);
  
    expect(screen.getByText('Hello, User.')).toBeInTheDocument();
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    ).toBeInTheDocument();
    expect(screen.getByText("Let's Start")).toBeInTheDocument();
  });
  it("should have to /signin after clicking Let's Start", () => {
    render(<WelcomePage />);
  
    expect(screen.getByText("Let's Start")).toHaveProperty('href', 'http://localhost/signin');
  });  
});
