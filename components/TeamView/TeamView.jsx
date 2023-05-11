/**
 * Country Code has to be lowercase
 */
const TeamView = ({ teamData }) => {
  if (!teamData || !teamData.countryCode) return;
  return (
    <div className="">
      <img
        src={`https://flagcdn.com/${teamData.countryCode}.svg`}
        width="50"
        alt={`${teamData.name}`}
      />
      <span>{teamData.name}</span>
    </div>
  );
};

export default TeamView;
