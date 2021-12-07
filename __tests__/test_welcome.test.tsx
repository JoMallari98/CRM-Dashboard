/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomePage from "pages/welcome";

describe("WelcomePage", () => {
  it("renders a welcome text", () => {
    render(<WelcomePage />);

    expect(screen.getByText("Hello, User.")).toBeInTheDocument();
  });
});
