import React, { useState } from "react";

export default function Result({
  homeTeamScore,
  awayTeamScore,
  canBeUpdated = false,
  updateScore,
}) {
  const [newHomeScore, setNewHomeScore] = useState(homeTeamScore);
  const [newAwayScore, setNewAwayScore] = useState(awayTeamScore);

  const handleHomeScoreChange = (e) => {
    if (e.target.value < 0) return;
    setNewHomeScore(e.target.value);
    updateScore("homeTeam", e.target.value);
  };

  const handleAwayScoreChange = (e) => {
    if (e.target.value < 0) return;
    setNewAwayScore(e.target.value);
    updateScore("awayTeam", e.target.value);
  };

  if (homeTeamScore == undefined || awayTeamScore == undefined) return null;
  if (homeTeamScore < 0 || awayTeamScore < 0) return null;
  if (canBeUpdated) {
    return (
      <div className="flex items-center">
        <input
          type="number"
          value={newHomeScore}
          onChange={handleHomeScoreChange}
          className="w-12 mr-4 text-center"
        />
        <span>-</span>
        <input
          type="number"
          value={newAwayScore}
          onChange={handleAwayScoreChange}
          className="w-12 ml-4 text-center"
        />
      </div>
    );
  }
  return (
    <span className="">
      {homeTeamScore} - {awayTeamScore}
    </span>
  );
}
