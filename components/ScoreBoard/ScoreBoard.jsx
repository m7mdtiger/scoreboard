import React, { useEffect, useReducer } from "react";
import NewMatch from "../NewMatch/NewMatch";
import ScoresReducer, { initialState, actionTypes } from "./ScoresReducer";

export default function ScoreBoard() {
  const [state, dispatch] = useReducer(ScoresReducer, initialState);
  const { games, playingCountries } = state;

  const handleStartNewMatch = (newMatch) => {
    const { gameId } = newMatch;
    const [homeTeam, awayTeam] = gameId.split("-");
    console.log("playingCountries", playingCountries);
    if (!playingCountries.has(homeTeam) && !playingCountries.has(awayTeam)) {
      dispatch({ type: actionTypes.START, data: newMatch });
    } else {
      console.warn("At least one of the teams is already playing a game!");
    }
  };

  return (
    <div>
      {console.log("games", games)}
      <NewMatch
        startNewMatch={handleStartNewMatch}
        playingCountries={playingCountries}
      />
    </div>
  );
}
