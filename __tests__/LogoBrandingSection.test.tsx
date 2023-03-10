/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import LogoBrandingSection from "src/components/common/LogoBrandingSection";

describe("LogoBrandingSection", () => {
  // Test for Logo checking 
  it("renders a logo", () => {
    render(<LogoBrandingSection />);

    expect(screen.getByText("LOGO")).toBeInTheDocument();
  });
});
