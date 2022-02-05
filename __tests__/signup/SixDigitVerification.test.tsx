/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SixDigitVerification from "src/components/common/SixDigitVerification";

describe("SixDigitVerification", () => {
  afterEach(() => {
    cleanup();
  });
  //Test for six digit inputs
  it("should render 6 inputs", () => {
    render(<SixDigitVerification />);
    expect(screen.getByTestId("six-digit-input-0")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-1")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-2")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-3")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-4")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-5")).toBeInTheDocument();
  });
});
