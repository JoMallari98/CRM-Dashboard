/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfoCard from "src/components/Investor/common/UserInfoCard";

describe("UserInfoCard", () => {
  it("should render name and usertitle correctly", () => {
    render(<UserInfoCard name="John Doe" userTitle="Superman" />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Superman")).toBeInTheDocument();
  });
});
