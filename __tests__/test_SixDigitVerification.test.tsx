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
  it("should render 6 inputs", () => {
    render(<SixDigitVerification />);

    expect(screen.getByTestId("six-digit-input-0")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-1")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-2")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-3")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-4")).toBeInTheDocument();
    expect(screen.getByTestId("six-digit-input-5")).toBeInTheDocument();
  });
  it("should focus to the next input after inputing number", async () => {
    render(<SixDigitVerification />);
    const input = screen.getByTestId("six-digit-input-0");
    const input2 = screen.getByTestId("six-digit-input-1");
    userEvent.type(input, "5");
    expect(input).toHaveValue(5);
    expect(input2).toHaveFocus();
  });
  it("should should limit input to 0-9", async () => {
    render(<SixDigitVerification />);
    const input = screen.getByTestId("six-digit-input-0");
    userEvent.type(input, "1");
    expect(input).toHaveValue(1);
  });
  it("should should limit input to 0-9", async () => {
    render(<SixDigitVerification />);
    const input = screen.getByTestId("six-digit-input-0");
    userEvent.type(input, "10");
    expect(input).toHaveValue(1);
  });
  it("should should limit input to 0-9", async () => {
    render(<SixDigitVerification />);
    const input = screen.getByTestId("six-digit-input-0");
    userEvent.type(input, "90");
    expect(input).toHaveValue(9);
  });
});
