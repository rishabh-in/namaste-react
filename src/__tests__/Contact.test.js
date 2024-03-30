import { render, screen } from "@testing-library/react"
import Contact from '../components/Contact'
import '@testing-library/jest-dom';

test("Contact us page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
})

test("Should have Submit button in contact us page", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument()
})