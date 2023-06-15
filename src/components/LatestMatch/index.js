// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  console.log(details)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = details
  return (
    <div className="outerDivLatestMatch">
      {/* first div */}
      <div className="child1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      {/* second div */}
      <div className="child2">
        <img className="competingLogo" src={competingTeamLogo} />
      </div>
      {/* third div */}
      <div className="child3">
        <p>{firstInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{matchStatus}</p>
        <p>{secondInnings}</p>
        <p>{umpires}</p>
      </div>
      {/* third div ended */}
    </div>
  )
}

export default LatestMatch
