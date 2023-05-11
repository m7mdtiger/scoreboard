import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import GamesSummary from "./GamesSummary";

describe("GamesSummary", () => {
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
      score: 3,
    },
    awayTeam: {
      name: "Brazil",
      countryCode: "BR",
      score: 2,
    },
  });

  it("Renders correctly", () => {
    render(<GamesSummary games={mockGamesMap} />);
    expect(screen.getByText("Games Summary")).toBeInTheDocument();
    expect(screen.getByText(/Jordan/i)).toBeInTheDocument;
    expect(screen.getByText(/Canada/i)).toBeInTheDocument;
  });

  it("Renders on the correct order", () => {
    render(<GamesSummary games={mockGamesMap} />);

    const gameElements = screen.getAllByTestId("game-data");
    expect(gameElements).toHaveLength(2);

    expect(gameElements[0]).toHaveTextContent("Poland3 - 2Brazil");
    expect(gameElements[1]).toHaveTextContent("Jordan2 - 1Canada");
  });

  it("Renders nothing when there are no games", () => {
    render(<GamesSummary games={null} />);

    expect(screen.queryByText("Games Summary")).not.toBeInTheDocument();
    expect(screen.queryByTestId("game")).not.toBeInTheDocument();
  });

  it("Renders nothing when games summary is empty", () => {
    const games = new Map();

    render(<GamesSummary games={games} />);

    expect(screen.queryByText("Games Summary")).not.toBeInTheDocument();
    expect(screen.queryByTestId("game")).not.toBeInTheDocument();
  });
});
