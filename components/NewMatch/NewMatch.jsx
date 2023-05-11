import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import countryList from "../../lib/countryList";

const NewMatch = ({ startNewMatch, playingCountries }) => {
  const [homeTeamCountryCode, setHomeTeamCountryCode] = useState(null);
  const [awayTeamCountryCode, setAwayTeamCountryCode] = useState(null);

  const handleHomeTeamChange = (countryCode) => {
    setHomeTeamCountryCode(countryCode);
  };

  const handleAwayTeamChange = (countryCode) => {
    setAwayTeamCountryCode(countryCode);
  };

  const handleStartGame = () => {
    if (
      !homeTeamCountryCode ||
      !awayTeamCountryCode ||
      homeTeamCountryCode == awayTeamCountryCode
    )
      return;

    let newMatch = {
      gameId: `${homeTeamCountryCode}-${awayTeamCountryCode}`,
      homeTeam: {
        name: countryList[homeTeamCountryCode],
        countryCode: homeTeamCountryCode,
        score: 0,
      },
      awayTeam: {
        name: countryList[awayTeamCountryCode],
        countryCode: awayTeamCountryCode,
        score: 0,
      },
    };
    startNewMatch(newMatch);
  };

  const playingCountriesArray =
    (playingCountries && Array.from(playingCountries)) || [];
  return (
    <div className="m-4">
      <h3 className="text-center">Start a New Game</h3>
      <div className="grid grid-cols-3 space-x-2">
        <div>
          <ReactFlagsSelect
            searchable={true}
            selected={homeTeamCountryCode}
            onSelect={handleHomeTeamChange}
            placeholder={"HomeTeam"}
            countries={[awayTeamCountryCode]}
            countries={[...playingCountriesArray, awayTeamCountryCode]}
            blacklistCountries={true}
          />
        </div>
        <div>
          <ReactFlagsSelect
            searchable={true}
            selected={awayTeamCountryCode}
            onSelect={handleAwayTeamChange}
            placeholder={"AwayTeam"}
            countries={[...playingCountriesArray, homeTeamCountryCode]}
            blacklistCountries={true}
          />
        </div>
        <button
          onClick={handleStartGame}
          className="btn rounded w-28 bg-blue-500 h-11"
          disabled={
            !homeTeamCountryCode ||
            !awayTeamCountryCode ||
            homeTeamCountryCode === awayTeamCountryCode
          }
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default NewMatch;
