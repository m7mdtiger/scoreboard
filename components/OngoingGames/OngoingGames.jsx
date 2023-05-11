import React, { useEffect, useState } from "react";
import Game from "../Game/Game";

export default function OngoingGames({ games = {}, deleteGame, updateGame }) {
  const [ongoingGames, setOngoingGames] = useState(null);

  useEffect(() => {
    if (!games || games.size < 0) return;
    const mappedGames = Array.from(games).map(([gameId, game]) => {
      return (
        <Game
          pairScore={game}
          canBeUpdated={true}
          key={gameId}
          deleteGame={deleteGame}
          updateGame={updateGame}
        />
      );
    });
    if (mappedGames.length > 0) setOngoingGames(mappedGames);
  }, [games]);

  if (!ongoingGames) return null;
  return (
    <div>
      <h2 className="text-center m-4">Ongoing Games</h2>
      {console.log("Ongoing Games", games)}
      <div className="m-4 grid grid-cols-2 border shadow-lg mt-4 bg-slate-300">
        {ongoingGames}
      </div>
    </div>
  );
}
