import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    iplTeam: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getIplTeam()
  }

  getIplTeam = async () => {
    const res = await fetch('https://apis.ccbp.in/ipl')
    const data = await res.json()
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      imageUrl: eachTeam.team_image_url,
    }))
    console.log(updatedData)
    this.setState({iplTeam: updatedData, isLoader: false})
  }

  renderTeamsList = () => {
    const {iplTeam} = this.state
    return (
      <ul className="teamsList">
        {iplTeam.map(eachTeam => (
          <TeamCard key={eachTeam.id} Teams={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoader} = this.state
    return (
      <div className="appContainer">
        <div className="iplBoardCont">
          <div className="headerCont">
            <img
              className="iplLogo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="headerHead">IPL Dashboard</h1>
          </div>
          {isLoader ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
