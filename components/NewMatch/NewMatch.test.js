import { render, screen, fireEvent } from "@testing-library/react";
import NewMatch from "./NewMatch";
import "@testing-library/jest-dom";

describe("NewMatch", () => {
  it("Renders Correctly", () => {
    render(<NewMatch startNewMatch={{}} playingCountries={new Set()} />);

    const homeTeamSelect = screen.getByText(/HomeTeam/i);
    const awayTeamSelect = screen.getByText(/AwayTeam/i);
    const startButton = screen.getByText("Start Game");

    fireEvent.click(startButton);

    expect(homeTeamSelect).toBeInTheDocument();
    expect(awayTeamSelect).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
  });
});
