import { render, screen, fireEvent } from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";
import "@testing-library/jest-dom";

describe("ScoreBoard", () => {
  it("dispatches the startNewGame action when 'Start Game' button is clicked", () => {
    render(<ScoreBoard />);
    const startGameButton = screen.getByText("Start Game");
    fireEvent.click(startGameButton);
    // screen.debug();
  });
});
