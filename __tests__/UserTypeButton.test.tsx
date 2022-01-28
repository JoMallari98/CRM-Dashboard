/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import UserTypeButton from "src/components/common/UserTypeButton";

describe("UserTypeButton", () => {
  //Test for Text Present on Screen
  it("should render text correctly", () => {
    render(<UserTypeButton text="Investor" />);

    expect(screen.getByText("Investor")).toBeInTheDocument();
  });
});
