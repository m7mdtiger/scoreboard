import { render, screen, fireEvent } from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";
import { initialState } from "./ScoresReducer";
import "@testing-library/jest-dom";

const newMatchMock = {
  gameId: "AI-AR",
  homeTeam: {
    name: "Anguilla",
    countryCode: "AI",
    score: 0,
  },
  awayTeam: {
    name: "Argentina",
    countryCode: "AR",
    score: 0,
  },
};

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

describe("ScoreBoard", () => {
  it("Show msg when there are no games", () => {
    render(<ScoreBoard />);
    const messageElement = screen.getByText("No matches have been added yet!");
    expect(messageElement).toBeInTheDocument();
  });
});
