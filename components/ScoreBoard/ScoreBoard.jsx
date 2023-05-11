import React, { useEffect, useReducer } from "react";
import NewMatch from "../NewMatch/NewMatch";
import Game from "../Game/Game";
import GamesSummary from "../GamesSummary/GamesSummary";
import OngoingGames from "../OngoingGames/OngoingGames";
import ScoresReducer, { initialState, actionTypes } from "./ScoresReducer";

export default function ScoreBoard() {
  const [state, dispatch] = useReducer(ScoresReducer, initialState);
  const { games, playingCountries } = state;

  const handleStartNewMatch = (newMatch) => {
    console.log("newMatch", newMatch);
    const { gameId } = newMatch;
    const [homeTeam, awayTeam] = gameId.split("-");
    if (!playingCountries.has(homeTeam) && !playingCountries.has(awayTeam)) {
      dispatch({ type: actionTypes.START, data: newMatch });
    } else {
      console.warn("At least one of the teams is already playing a game!");
    }
  };

  const handleDeleteGame = (gameId) => {
    if (!games.get(gameId)) return;
    dispatch({ type: actionTypes.FINISH, data: { gameId } });
  };

  const handleUpdateGame = (gameId, team, score) => {
    if (!gameId || !team || !score) return;
    if (!games.get(gameId)) return;
    dispatch({ type: actionTypes.UPDATE, data: { gameId, team, score } });
  };

  return (
    <div>
      <NewMatch
        startNewMatch={handleStartNewMatch}
        playingCountries={playingCountries}
      />
      {games.size > 0 ? (
        <>
          <OngoingGames
            games={games}
            deleteGame={handleDeleteGame}
            updateGame={handleUpdateGame}
          />
          <GamesSummary games={games} />
        </>
      ) : (
        <h2 className="text-center">No matches have been added yet!</h2>
      )}
    </div>
  );
}
