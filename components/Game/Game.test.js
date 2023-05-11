import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "./Game";

const pairScore = {
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
};

describe("Game", () => {
  it("renders correctly", () => {
    render(<Game pairScore={pairScore} deleteGame={() => {}} />);

    const homeTeam = screen.getByText(/Jordan/i);
    const awayTeam = screen.getByText(/Canada/i);
    const result = screen.getByText(/2 - 1/i);
    const deleteButton = screen.queryByRole("button", { name: /delete/i });

    expect(homeTeam).toBeInTheDocument();
    expect(awayTeam).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
  });

  it("Doesn't render when no pairScore", () => {
    render(<Game deleteGame={() => {}} />);
    const homeTeam = screen.queryByText(/Jordan/i);
    expect(homeTeam).not.toBeInTheDocument();
  });

  it("updates the score on canBeUpdated=true and clicking on result", () => {
    const updateGameMock = jest.fn();

    render(
      <Game
        pairScore={pairScore}
        canBeUpdated={true}
        deleteGame={() => {}}
        updateGame={updateGameMock}
      />
    );

    const homeScoreInput = screen.getByDisplayValue(/2/i);
    const awayScoreInput = screen.getByDisplayValue(/1/i);
    fireEvent.change(homeScoreInput, { target: { value: "3" } });
    fireEvent.change(awayScoreInput, { target: { value: "2" } });

    expect(updateGameMock).toHaveBeenCalledWith(
      pairScore.gameId,
      "homeTeam",
      "3"
    );
    expect(updateGameMock).toHaveBeenCalledWith(
      pairScore.gameId,
      "awayTeam",
      "2"
    );
  });

  it("deletes the game on canBeUpdated=true and clicking on delete button", () => {
    const deleteGameMock = jest.fn();

    render(
      <Game
        pairScore={pairScore}
        canBeUpdated={true}
        deleteGame={deleteGameMock}
      />
    );

    const deleteButton = screen.getByRole("button", { name: /delete/i });

    fireEvent.click(deleteButton);

    expect(deleteGameMock).toHaveBeenCalledWith(pairScore.gameId);
  });
});
