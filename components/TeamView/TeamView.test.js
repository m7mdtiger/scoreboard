import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamView from "./TeamView";

describe("TeamView", () => {
  it("Doesn't render when empty", () => {
    render(<TeamView />);
    const teamFlag = screen.queryByAltText(/.+/);
    const teamName = screen.queryByText(/.+/);

    expect(teamFlag).not.toBeInTheDocument();
    expect(teamName).not.toBeInTheDocument();
  });
  it("Renders correctly", () => {
    const teamData = { name: "Poland", countryCode: "pl" };
    render(<TeamView teamData={teamData} />);
    let countryFlag = screen.getByRole("img", {
      name: /poland/i,
    });
    let countryName = screen.getByText(/poland/i);

    expect(countryFlag).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();

    expect(countryFlag).toHaveAttribute(
      "src",
      `https://flagcdn.com/${teamData.countryCode}.svg`
    );
    expect(countryName).toHaveTextContent(teamData.name);
  });
});
