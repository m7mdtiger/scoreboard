import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "./Result";

describe("Result", () => {
  it("Does not render if scores are not provided", () => {
    render(<Result />);
    const result = screen.queryByText(/-|0/i);
    expect(result).not.toBeInTheDocument();
  });

  it("Does not render when negative values", () => {
    const homeTeamScore = -2;
    const awayTeamScore = -1;

    render(
      <Result homeTeamScore={homeTeamScore} awayTeamScore={awayTeamScore} />
    );

    screen.debug();
    const result = screen.queryByText("-");
    expect(result).not.toBeInTheDocument();

    const firstValue = screen.queryByText("-2");
    const secondValue = screen.queryByText("-1");
    expect(firstValue).not.toBeInTheDocument();
    expect(secondValue).not.toBeInTheDocument();
  });

  it("Renders correctly", () => {
    const homeTeamScore = 2;
    const awayTeamScore = 1;

    render(
      <Result homeTeamScore={homeTeamScore} awayTeamScore={awayTeamScore} />
    );

    const resultElement = screen.getByText(
      `${homeTeamScore} - ${awayTeamScore}`
    );
    expect(resultElement).toBeInTheDocument();
  });

  it("Renders correctly onChnage", () => {
    const homeTeamScore = 2;
    const awayTeamScore = 1;
    const updateScoreMock = jest.fn();

    render(
      <Result
        homeTeamScore={homeTeamScore}
        awayTeamScore={awayTeamScore}
        canBeUpdated={true}
        updateScore={updateScoreMock}
      />
    );

    const homeScoreInput = screen.getByDisplayValue(/2/i);
    const awayScoreInput = screen.getByDisplayValue(/1/i);

    fireEvent.change(homeScoreInput, { target: { value: "3" } });
    fireEvent.change(awayScoreInput, { target: { value: "2" } });

    expect(homeScoreInput.value).toBe("3");
    expect(awayScoreInput.value).toBe("2");
    expect(updateScoreMock).toHaveBeenCalledTimes(2);
    expect(updateScoreMock).toHaveBeenCalledWith("homeTeam", "3");
    expect(updateScoreMock).toHaveBeenCalledWith("awayTeam", "2");
  });
});
