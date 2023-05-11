import React from "react";
import TeamView from "../TeamView/TeamView";
import Result from "../Result/Result";

export default function Game({
  pairScore,
  canBeUpdated,
  deleteGame,
  updateGame,
}) {
  if (!pairScore) return null;
  const { homeTeam, awayTeam } = pairScore;
  if (!homeTeam || !awayTeam) return null;

  const handleUpdateScore = (team, score) => {
    console.log("handleUpdateScore", team, "score = ", score);
    if (!team || !score) return;
    if (team === "homeTeam") {
      updateGame(pairScore.gameId, team, score);
    }
    if (team === "awayTeam") {
      updateGame(pairScore.gameId, team, score);
    }
  };

  return (
    <div className="grid grid-cols-4 p-2 border-4">
      <TeamView
        teamData={{
          countryCode: homeTeam.countryCode.toLowerCase(),
          score: homeTeam.score,
          name: homeTeam.name,
        }}
      />
      {canBeUpdated ? (
        <Result
          homeTeamScore={homeTeam.score}
          awayTeamScore={awayTeam.score}
          canBeUpdated={canBeUpdated}
          updateScore={handleUpdateScore}
        />
      ) : (
        <Result homeTeamScore={homeTeam.score} awayTeamScore={awayTeam.score} />
      )}
      <TeamView
        teamData={{
          countryCode: awayTeam.countryCode.toLowerCase(),
          score: awayTeam.score,
          name: awayTeam.name,
        }}
      />
      {canBeUpdated && (
        <button
          className="btn bg-red-700 w-24"
          onClick={() => deleteGame(pairScore.gameId)}
        >
          Delete
        </button>
      )}
    </div>
  );
}
