import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-details-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card-container">
        <div className="latest-match-card-details">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            className="latest-match-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="match-details-label">First Innings</p>
          <p className="match-details-value">{firstInnings}</p>

          <p className="match-details-label">Second Innings</p>
          <p className="match-details-value">{secondInnings}</p>

          <p className="match-details-label">Man Of The Match</p>
          <p className="match-details-value">{manOfTheMatch}</p>

          <p className="match-details-label">Umpires</p>
          <p className="match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
