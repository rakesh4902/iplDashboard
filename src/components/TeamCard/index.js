// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {Teams} = this.props
    const {name, id, imageUrl} = Teams
    return (
      <Link to={`/team-matches/${id}`} className="linkItem">
        <li className="teamCard">
          <img className="teamImg" src={imageUrl} alt={name} />
          <p className="teamName">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
