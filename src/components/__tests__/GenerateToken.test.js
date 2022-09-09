import { render, screen, cleanup } from "@testing-library/react";
import GenerateToken from "../GenerateToken";

afterEach(() => {
  cleanup();
});

test("should render generate token component", () => {
  render(<GenerateToken />);
  const generateToken = screen.getByText(/Generate Token/i);
  expect(generateToken).toBeInTheDocument();
});
