import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Renders correctly", () => {
    render(<Navbar />);
    const navbarLink = screen.getByRole("link", {
      name: /scoreboard/i,
    });
    expect(navbarLink).toBeInTheDocument();
  });
});
