import React, { useEffect, useState } from "react";
import Game from "../Game/Game";

export default function GamesSummary({ games }) {
  const [gamesSummary, setGamesSummary] = useState(null);

  useEffect(() => {
    if (!games) return;
    const gamesSummary = Array.from(games.entries()).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        const scoreSumA = valueA.homeTeam.score + valueA.awayTeam.score;
        const scoreSumB = valueB.homeTeam.score + valueB.awayTeam.score;
        return scoreSumB - scoreSumA;
      }
    );
    if (gamesSummary.length > 0) setGamesSummary(gamesSummary);
  }, [games]);

  if (!games || !gamesSummary) return;
  return (
    <div>
      <h2 className="text-center m-4">Games Summary</h2>
      <div className="m-4 grid grid-cols-2 border shadow-lg mt-4 bg-slate-300">
        {console.log("gamesSummary", gamesSummary)}
        {gamesSummary &&
          gamesSummary.map(([gameId, game]) => (
            <Game key={gameId} pairScore={game} />
          ))}
      </div>
    </div>
  );
}
