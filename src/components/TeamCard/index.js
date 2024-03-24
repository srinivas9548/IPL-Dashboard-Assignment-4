import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
