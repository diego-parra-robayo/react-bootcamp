import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./Logo";

const MockLogo = () => (
  <BrowserRouter>
    <Logo />
  </BrowserRouter>
);

describe("Logo", () => {
  test("When clicking on logo navigate to home", async () => {
    render(<MockLogo />);
    const link = await screen.findByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
