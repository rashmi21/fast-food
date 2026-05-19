import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load the component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button inside the Contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Notify Us");

  expect(button).toBeInTheDocument();
});

it("Should load input inside the Contact component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");

  expect(input).toBeInTheDocument();
});

test("Should load 2 input inside the Contact component", () => {
  render(<Contact />);

  const inputs = screen.getAllByRole("textbox");

  expect(inputs.length).toBe(2);
});
