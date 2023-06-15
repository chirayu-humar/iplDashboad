// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <li className="outerCard">
      <Link to={`/team-matches/${id}`}>
        <div className="logoContainer">
          <img alt="name" className="logo" src={teamImageUrl} />
        </div>
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
