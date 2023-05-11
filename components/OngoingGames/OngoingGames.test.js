import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OngoingGames from "./OngoingGames";

const mockGamesMap = new Map();
mockGamesMap.set("JO-PL", {
  gameId: "JO-PL",
  homeTeam: {
    name: "Jordan",
    countryCode: "JO",
    score: 2,
  },
  awayTeam: {
    name: "Canada",
    countryCode: "CA",
    score: 1,
  },
});
mockGamesMap.set("PL-BR", {
  gameId: "PL-BR",
  homeTeam: {
    name: "Poland",
    countryCode: "PL",
    score: 4,
  },
  awayTeam: {
    name: "Brazil",
    countryCode: "BR",
    score: 3,
  },
});

describe("OngoingGames", () => {
  it("renders correctly with ongoing games", () => {
    render(
      <OngoingGames
        games={mockGamesMap}
        deleteGame={() => {}}
        updateGame={() => {}}
      />
    );

    const heading = screen.getByText(/ongoing games/i);

    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Ongoing Games")).toBeInTheDocument();
    expect(screen.getByAltText("Jordan")).toBeInTheDocument();
    expect(screen.getByText("Jordan")).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2/i)).toBeInTheDocument();
    expect(screen.getByAltText("Canada")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
    expect(screen.getByDisplayValue(/1/i)).toBeInTheDocument();
    expect(screen.getByAltText("Poland")).toBeInTheDocument();
    expect(screen.getByText("Poland")).toBeInTheDocument();
    expect(screen.getByDisplayValue(/4/i)).toBeInTheDocument();
    expect(screen.getByAltText("Brazil")).toBeInTheDocument();
    expect(screen.getByText("Brazil")).toBeInTheDocument();
    expect(screen.getByDisplayValue(/3/i)).toBeInTheDocument();

    const deleteButtons = screen.getAllByText("Delete");
    expect(deleteButtons.length).toBe(2);
  });

  it("renders correctly with no ongoing games", () => {
    render(<OngoingGames deleteGame={() => {}} updateGame={() => {}} />);

    expect(screen.queryByText("Ongoing Games")).not.toBeInTheDocument();
  });
});
