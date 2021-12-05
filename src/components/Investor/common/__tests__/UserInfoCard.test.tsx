/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserInfoCard from "../UserInfoCard";

describe("UserInfoCard", () => {
  it("should render name and usertitle correctly", () => {
    render(<UserInfoCard name="John Doe" userTitle="Superman" />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Superman")).toBeInTheDocument();
  });
});
