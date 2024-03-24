import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const teamsApiUrl = 'https://apis.ccbp.in/ipl'
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <ul className="ipl-list-container">
            {isLoading ? (
              <div testid="loader" className="loader-container">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              teamsData.map(eachData => (
                <TeamCard key={eachData.id} teamDetails={eachData} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
