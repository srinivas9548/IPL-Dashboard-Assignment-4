import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  console.log(recentMatchDetails)
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lose'

  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="match-card-container">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
