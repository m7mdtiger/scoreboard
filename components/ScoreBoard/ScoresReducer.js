export const actionTypes = {
  START: "start",
  UPDATE: "update",
  FINISH: "finish",
};

export const initialState = {
  games: new Map(),
  playingCountries: new Set(),
};

const reducer = (state, action) => {
  const { gameId } = action.data;
  const [homeTeam, awayTeam] = gameId.split("-");
  switch (action.type) {
    case actionTypes.START: {
      const playingCountries = new Set(state.playingCountries);
      const { gameId } = action.data;
      const [homeTeam, awayTeam] = gameId.split("-");
      playingCountries.add(homeTeam);
      playingCountries.add(awayTeam);

      const games = new Map(state.games);
      games.set(gameId, action.data);

      return {
        ...state,
        playingCountries,
        games,
      };
    }
    case actionTypes.FINISH: {
      const playingCountries = new Set(state.playingCountries);
      playingCountries.delete(homeTeam);
      playingCountries.delete(awayTeam);

      const games = new Map(state.games);
      games.delete(gameId);
      return {
        ...state,
        playingCountries,
        games,
      };
    }
    case actionTypes.UPDATE: {
      const games = new Map(state.games);
      let selectedGame = games.get(gameId);
      const { team, score } = action.data;
      selectedGame[team].score = Number(score);
      games.set(gameId, selectedGame);
      return {
        ...state,
        games,
      };
    }
    default:
      throw new Error("Unrecognized action type!");
  }
};

export default reducer;
