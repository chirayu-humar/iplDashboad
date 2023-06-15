// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, matchStatus, competingTeamLogo, result} = details
  return (
    <li className="outerMatchCard">
      <div className="innerDiv">
        <img
          alt="latest match {competing_team}"
          className="logoImg"
          src={competingTeamLogo}
        />
      </div>
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
