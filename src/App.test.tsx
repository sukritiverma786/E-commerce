import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders company dropdown visible", () => {
  render(<App />);
  const linkElement = screen.getByText(/Company/i);
  expect(linkElement).toBeVisible();
});
