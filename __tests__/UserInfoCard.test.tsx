/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfoCard from "src/components/investor/common/UserInfoCard";

describe("UserInfoCard", () => {
  //Test For title and name
  it("should render name and usertitle correctly", () => {
    render(<UserInfoCard name="John Doe" userTitle="Superman" />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Superman")).toBeInTheDocument();
  });
});
