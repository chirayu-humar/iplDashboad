/* eslint-disable react/no-unknown-property */
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {impObject: {}, isLoading: true}

  changeToCamelCase = object => {
    console.log('changeToCamelCase')
    const newObject = {
      competingTeam: object.competing_team,
      competingTeamLogo: object.competing_team_logo,
      date: object.date,
      firstInnings: object.first_innings,
      id: object.id,
      manOfTheMatch: object.man_of_the_match,
      matchStatus: object.match_status,
      result: object.result,
      secondInnings: object.second_innings,
      umpires: object.umpires,
      venue: object.venue,
    }
    return newObject
  }

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: this.changeToCamelCase(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachItem => {
        const newData = this.changeToCamelCase(eachItem)
        return newData
      }),
      teamBannerUrl: data.team_banner_url,
    }
    console.log(updatedData)
    this.setState({impObject: updatedData, isLoading: false})
  }

  render() {
    const {impObject, isLoading} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = impObject
    return (
      <div className="outerTeamMatches">
        {isLoading && (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isLoading && (
          <div className="firstOuterChild">
            <img alt="team banner" className="teamImage" src={teamBannerUrl} />
          </div>
        )}
        {!isLoading && (
          <div className="secondOuterChild">
            <LatestMatch details={latestMatchDetails} />
          </div>
        )}
        {!isLoading && (
          <ul className="thirdOuterChild">
            {recentMatches.map(eachItem => (
              <MatchCard key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TeamMatches
