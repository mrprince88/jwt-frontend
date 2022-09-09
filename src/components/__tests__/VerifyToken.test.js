import { render, screen, cleanup } from "@testing-library/react";
import VerifyToken from "../VerifyToken";

afterEach(() => {
  cleanup();
});

test("should render verify token component", () => {
  render(<VerifyToken />);
  const generateToken = screen.getByText(/Verify Token/i);
  expect(generateToken).toBeInTheDocument();
});
