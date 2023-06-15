/* eslint-disable react/no-unknown-property */
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {TeamsList: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const Data = data.teams
    const updatedData = Data.map(eachItem => {
      const newItem = {
        id: eachItem.id,
        name: eachItem.name,
        teamImageUrl: eachItem.team_image_url,
      }
      return newItem
    })
    this.setState({
      TeamsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {TeamsList, isLoading} = this.state
    console.log(TeamsList)
    return (
      <div className="bg-container">
        {isLoading && (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isLoading && (
          <div className="first">
            <div className="imgContainer">
              <img
                className="iplLogo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
            </div>
            <h1>IPL Dashboard</h1>
          </div>
        )}
        {!isLoading && (
          <ul className="second">
            {TeamsList.map(eachItem => (
              <TeamCard key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
