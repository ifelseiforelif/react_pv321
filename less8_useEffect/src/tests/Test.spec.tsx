import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Test from "../Test";
test("Test should be rendered", () => {
  render(<Test />); //act
  const result = screen.getByText(/hello/i); //assert
  expect(result).toBeInTheDocument(); //assert
});
